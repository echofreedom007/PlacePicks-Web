import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  // store expiration date as a state to use in logout settimeout api,
  // when it reaches the time limit, log user out automatically
  const [tokenExpiration, setTokenExpiration] = useState(null);

  const login = useCallback((uid, token, expirationDate) => {
    //instead of using [isLoggedIn, setIsLoggedIn], we can use token now
    setToken(token);
    setUserId(uid);

    // store the token expiration data into a variable. 1000 ms * 60 * 60 = 1h
    // since we call login in the useEffect every render, we want to pass the
    // exsiting expirationData created in the original login instead of generating
    // a new date every render.
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

    setTokenExpiration(tokenExpirationDate);
    // access local storage, and this is a globally available object in JavaScript
    // this is to store the authenticaiton data
    console.log(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        //The toISOString() method of Date instances returns a string
        // representing this date in the date time string format
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    // reset the expiration
    setTokenExpiration(null);

    setUserId(null);

    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpiration) {
      // cannot use the tokenExpiration directly.
      // convert time string into number, the result of the calculation is in ms
      const remainingTime = tokenExpiration.getTime() - new Date().getTime();
      // setTimeout returns an id
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      // clear the timer whenever the token changes
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpiration]);

  // ensure login can be executed when there's a valid token stored in the
  // local storage
  useEffect(() => {
    // convert JSON string to regular JavaScript objects
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedData &&
      storedData.token &&
      // conver ISO string back to date object
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId };
};

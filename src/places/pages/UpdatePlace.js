import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Tofino, British Columbia",
    description:
      "A popular year-round tourism destination, Tofino's summer population swells to many times its winter size. It attracts surfers, hikers, nature lovers, bird watchers, campers, whale watchers, fishers, or anyone just looking to be close to nature.",
    imageUrl:
      "https://www.travelandleisure.com/thmb/30qfukQH1j5olGSTkZQqsM4phoI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-tofino-BEAUTYCANADA0623-6d4980ad850c4b668185364daf4ce7fd.jpg",
    address: "411 Campbell Street, Tofino",
    location: {
      lat: 49.1523597,
      lng: -125.9068902,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Tofino, British Columbia",
    description:
      "A popular year-round tourism destination, Tofino's summer population swells to many times its winter size. It attracts surfers, hikers, nature lovers, bird watchers, campers, whale watchers, fishers, or anyone just looking to be close to nature.",
    imageUrl:
      "https://www.travelandleisure.com/thmb/30qfukQH1j5olGSTkZQqsM4phoI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-tofino-BEAUTYCANADA0623-6d4980ad850c4b668185364daf4ce7fd.jpg",
    address: "411 Campbell Street, Tofino",
    location: {
      lat: 49.1523597,
      lng: -125.9068902,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true
  );

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace.length === 0) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;

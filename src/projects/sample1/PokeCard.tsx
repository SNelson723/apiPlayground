import { PokeCardProps } from "../../interfaces";
import axios from 'axios';
import {useState, useEffect} from 'react';

const PokeCard = ({name, url}: PokeCardProps) => {

  const url = `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"`
  return (
    <div>
      <div>
        howdy
      </div>
    </div>
  )
};

export default PokeCard;
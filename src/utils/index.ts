import { ChangeEvent } from "react";
import { type TResult, type TResultItem } from "../types";

const EXCLUDE = ['/','\\','.','_','-','=',','];

export const filterGamers = (
  gamers: string,
) => gamers.split('\n').filter((i) => (!!i.trim() && !EXCLUDE.includes(i[0])))

export const shuffle = (
  gamers: string,
  size: number = 2,
  func: (val: TResult) => void,
) => {
  const init = filterGamers(gamers);
  const b:TResultItem = [];
  const teams: TResult = [];
  while(init.length > 0) {
    b.push(init.splice(Math.floor(Math.random()*init.length),1)[0]);
  }
  while(b.length > 0) {
    teams.push(b.splice(0, size));
  }
  func(teams);
}

export const text = (
  e: ChangeEvent<HTMLTextAreaElement>,
  func: (val: string) => void,
) => {
  const { target: { value : wholeText = '' } } = e;
  setGamersLS(wholeText);
  func(wholeText);
}

export const getGamersLS = () => localStorage.getItem('gamers') || '';

export const setGamersLS = (val: string) => localStorage.setItem('gamers', val);

export const getSizeLS = () => Number(localStorage?.getItem('gamersCount')) || 2;

export const setSizeLS = (val: number) => localStorage.setItem('gamersCount', String(val));
import { DASHBOARD } from "../constants/data"

export const saveGame = (property) => {
  if (localStorage.getItem('saveGame') === null) {
    const data = { [DASHBOARD.gameTitleKeysLocalStorage[property]]: true };
    localStorage.setItem('saveGame', JSON.stringify(data));
  } else {
    let data = JSON.parse(localStorage.getItem('saveGame'));
    data[DASHBOARD.gameTitleKeysLocalStorage[property]] = true;
    localStorage.setItem('saveGame', JSON.stringify(data));
  }
}
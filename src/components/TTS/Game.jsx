import React, { useState } from 'react'

function Game() {
  let tempElm = '';

  const handleChange = (e) => {
    if (e.target.value.length === 1) {
      let classNames = e.target.className.match(/(d\d+)|(m\d+)/gi);
      let className;
      if (tempElm.includes('m')) {
        className = classNames.length > 1 ? classNames[1] : classNames[0];
      }
      else className = classNames[0];
      tempElm = className;

      const nextInput = document.querySelectorAll(`td input.${tempElm || className}`);
      let isFocus = false;

      nextInput.forEach((elm, index) => {
        if (
          elm === document.activeElement &&
          index !== nextInput.length - 1 &&
          !isFocus
        ) {
          if (nextInput[index + 1].className.match(/disabled/gi) === null) {
            nextInput[index + 1].focus();
            isFocus = true;
          } else {
            if (index + 2 !== nextInput.length) {
              nextInput[index + 2].focus();
              isFocus = true;
            }
          }
        }
      });

      isFocus = false;
    }

  }

  return (
    <table className="text-center mx-auto w-full md:w-[90%]" id="TTS">
      <tbody>
        <tr className="flex">
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" data-list="1" data-label="1">
            <input onChange={handleChange} className="m1" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" />
        </tr>
        <tr className="flex">
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m1" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" />
        </tr>
        <tr className="flex">
          <td className="block" />
          <td className="block" data-list="2" data-label="2">
            <input onChange={handleChange} className="m2" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" data-list="3" data-label="3">
            <input onChange={handleChange} className="m3" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m1" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" />
        </tr>
        <tr className="flex">
          <td className="block" data-list="4" data-label="4">
            <input onChange={handleChange} className="d4" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d4 m2" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d4" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d4" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d4 m3" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d4" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m1" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" data-list="5" data-label="5">
            <input onChange={handleChange} className="m5" type="text" maxLength={1} />
          </td>
          <td className="block" />
        </tr>
        <tr className="flex">
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m2" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m3" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" data-list="6" data-label="6">
            <input onChange={handleChange} className="d6" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d6 m1" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d6" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d6 m5" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d6" type="text" maxLength={1} />
          </td>
        </tr>
        <tr className="flex">
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m3" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m1" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m5" type="text" maxLength={1} />
          </td>
          <td className="block" />
        </tr>
        <tr className="flex">
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block">
            <input onChange={handleChange} className="m3" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" data-list="7" data-label="7">
            <input onChange={handleChange} className="m7" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m5" type="text" maxLength={1} />
          </td>
          <td className="block" />
        </tr>
        <tr className="flex">
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m3" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m7" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m5" type="text" maxLength={1} />
          </td>
          <td className="block" />
        </tr>
        <tr className="flex">
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" data-list="8" data-label="8">
            <input onChange={handleChange} className="d8 m3" type="text" maxLength={1} />
          </td>
          <td className="block" data-list="8" >
            <input onChange={handleChange} className="d8" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d8 m7" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d8" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d8" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d8 m5" type="text" maxLength={1} />
          </td>
          <td className="block" >
            <input onChange={handleChange} className="d8" type="text" maxLength={1} />
          </td>
        </tr>
        <tr className="flex">
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" >
            <input onChange={handleChange} className="m7" type="text" maxLength={1} />
          </td>
          <td className="block" />
          <td className="block" />
          <td className="block" />
          <td className="block" />
        </tr>
      </tbody>
    </table>
  )
}

export default Game
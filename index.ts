#! /usr/bin/env node

import inquirer from 'inquirer';

let currencyValue:{[key: string ]:number}=
{
    PKR: 278.65,
    USD: 1,
    UAE: 3.67,
    SAR: 3.75,
    EUR: 0.92,
    YEN: 158.35,
}

let Converter = await inquirer.prompt([
  {
      type: 'list',
      name: 'from',
      message: 'Converting currency from ',
      choices: ['PKR', 'USD', 'UAE', 'SAR', 'EUR', 'YEN'],

  },
  {

    type: 'list',
    name: 'to',
    message: 'Converting currency to ',
    choices: ['PKR', 'USD', 'UAE', 'SAR', 'EUR', 'YEN'],

  },
  {

    type: 'number',
    name: 'amount',
    message: 'Enter YOur amount '

  },
])
console.log('Your converted amount is: ');
console.log(currencyValue[Converter.to] / currencyValue[Converter.from] * Converter.amount);
import React from 'react';
import {FilterType, MoneyType} from "./Filter";

type NewComponentPropsType = {
    money: Array<MoneyType>
    handler: (value: FilterType) => void
}

const NewComponent = (props: NewComponentPropsType) => {

    let filteredMoney = props.money

    return (
        <div>
            <ul>
                {filteredMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
                <button onClick={() => props.handler('dollar')}>Dollar</button>
                <button onClick={() => props.handler('ruble')}>Ruble</button>
                <button onClick={() => props.handler('all')}>All</button>
            </ul>
        </div>
    );
};

export default NewComponent;
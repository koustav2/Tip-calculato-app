/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'


function Calculator() {
    const [billAmount, setBillAmount] = useState(0)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [tipPercentagePer, setTipPercentagePer] = useState(0)
    const [numPeople, setNumPeople] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0.00)
    const [totalPerPersosn, setTotalPerPerson] = useState(0.00)

    useEffect(() => {
        if (billAmount > 0 && tipPercentage > 0 && numPeople > 0) {
            const billAmountInt = parseInt(billAmount)
            const tip = (billAmountInt * tipPercentage) / 100
            const tipPer = Math.round(tip / numPeople)
            const total = billAmountInt + tip
            const totalPerPerson = Math.round(total / numPeople)
            setTipAmount(tip)
            setTotalAmount(total)
            setTotalPerPerson(totalPerPerson)
            setTipPercentagePer(tipPer)
        }
    }, [billAmount, tipPercentage, numPeople, tipAmount, totalAmount])


    const resetBtn = () => {
        setBillAmount(0)
        setTipPercentage(0)
        setNumPeople(0)
        setTipAmount(0)
        setTotalAmount(0.00)
        setTotalPerPerson(0.00)
        setTipPercentagePer(0)
    }



    return (
        <>
            <h1>
                <img
                    src="/public/logo.svg"
                    alt="logo-for-calculator"
                    className="block mx-auto my-[3rem]"
                />
            </h1>
            <section className="container">
                <article className="input-container">
                    <form className="amount-input">
                        <label htmlFor="bill-amount">Bill</label>
                        <input
                            className="input-field"
                            type="number"
                            value={billAmount}
                            onChange={(e) => setBillAmount(e.target.value)}
                            name="amount"
                            id="bill-amount"
                            placeholder="0"
                            aria-label="bill-amount"
                            min="0"
                        />
                    </form>
                    {/* <!-- tip percent buttons --> */}
                    <form className="select-tip">
                        <label>Select Tip %</label>
                        <div className="percent-options">
                            <button
                                onClick={() => setTipPercentage(5)}
                                type="button"
                                className="btn_5"
                                aria-label="add-5-percentage"
                            >
                                5
                            </button>
                            <button
                                onClick={() => setTipPercentage(10)}
                                type="button"
                                className="btn_10"
                                aria-label="add-10-percentage"
                            >
                                10
                            </button>
                            <button onClick={() => setTipPercentage(15)}
                                type="button"
                                className="btn_15"
                                aria-label="add-15-percentage"
                            >
                                15
                            </button>
                            <button onClick={() => setTipPercentage(25)}
                                type="button"
                                className="btn_25"
                                aria-label="add-25-percentage"
                            >
                                25
                            </button>
                            <button onClick={() => setTipPercentage(50)}
                                type="button"
                                className="btn_50"
                                aria-label="add-50-percentage"
                            >
                                50
                            </button>
                            <input
                                id="custom"
                                className="custom-percentage"
                                value={tipPercentage}
                                onChange={(e) => setTipPercentage(e.target.value)}
                                type="number"
                                max="100"
                                placeholder="Custom"
                                aria-label="enter-custom-input"
                            />
                        </div>
                    </form>

                    <form className="num-people">
                        <label htmlFor="people-count">Number of People </label>
                        <input
                            className="input-field"
                            type="number"
                            placeholder="0"
                            value={numPeople}
                            onChange={
                                (e) => setNumPeople(e.target.value)
                            }
                            aria-label="enter-number-of-people"
                            required
                            aria-required="true"
                            min="0"
                            max="100"
                        />
                    </form>
                </article>

                {/* <!-- right section --> */}
                <article className="display-container">
                    {/* <div className="display-tip">
                        <div>
                            <p className="display-description">Tip Amount</p>
                        </div>
                        <p className="amount show-tip">${tipAmount}</p>
                    </div>
                    <div className="display-total">
                        <div>
                            <p className="display-description">Total</p>
                        </div>
                        <p className="amount show-total">${totalAmount}</p>
                    </div> */}
                    <div className="display-tip">
                        <div>
                            <p className="display-description">Tip Amount</p>
                            <p>/ person</p>
                        </div>
                        <p className="amount show-tip">${tipPercentagePer}</p>
                    </div>


                    <div className="display-total">
                        <div>
                            <p className="display-description">Total</p>
                            <p>/ person</p>
                        </div>
                        <p className="amount show-total">${totalPerPersosn}</p>
                    </div>
                    <button
                        onClick={resetBtn}
                        className="reset-btn" aria-label="reset">
                        reset
                    </button>
                </article>
            </section>
        </>
    )
}

export default Calculator

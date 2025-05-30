//
const API_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const amtA = document.getElementById("amtA");
const amtB = document.getElementById("amtB");
const clrBtnA = document.getElementById("clrBtnA");
const clrBtnB = document.getElementById("clrBtnB");
const curA = document.getElementById("curA");
const curB = document.getElementById("curB");
const flagImgA = document.getElementById("flagImgA");
const flagImgB = document.getElementById("flagImgB");
const swapBtn = document.getElementById("swapBtn");

const CACHED_DATA = {};

const hasUserStorage = (() => {
    try {
        return localStorage.length && true;
    } catch (err) {
        return false;
    }
})();

const SELECTED_CURRENCIES =
    hasUserStorage && localStorage.hasOwnProperty("curData")
        ? JSON.parse(localStorage.getItem("curData"))
        : ["usd", "inr"];

let lastTouchedAmt = null;

const setSelectedCurrencies = () => {
    if (!hasUserStorage) return;
    localStorage.setItem("curData", JSON.stringify([curA.value, curB.value]));
};

const appendCurrencies = (sel, selected) => {
    ctryDataArr.forEach(({ currencyName, currencyCode, flagUrl }) => {
        let optEl = document.createElement("option");
        optEl.value = currencyCode.toLowerCase();
        optEl.textContent = currencyCode;
        optEl.title = currencyName;
        optEl.selected = selected === optEl.value;
        optEl.dataset.flagUrl = flagUrl ?? "";
        sel.appendChild(optEl);
    });
};

const swapCurrencies = () => {
    const { value: curAValue } = curA;
    const { value: curBValue } = curB;
    curA.value = curBValue;
    curB.value = curAValue;
    setSelectedCurrencies();
    loadFlagImgs();
    if (!lastTouchedAmt) return;
    handleAmtChange(lastTouchedAmt);
};

const loadFlagImgs = () => {
    const {
        dataset: { flagUrl: flagUrlA },
    } = curA.querySelector(`option[value='${curA.value}']`);
    const {
        dataset: { flagUrl: flagUrlB },
    } = curB.querySelector(`option[value='${curB.value}']`);
    flagUrlA
        ? flagImgA.setAttribute("src", flagUrlA)
        : flagImgA.removeAttribute("src");
    flagUrlB
        ? flagImgB.setAttribute("src", flagUrlB)
        : flagImgB.removeAttribute("src");
};

const handleCurChange = () => {
    loadFlagImgs();
    setSelectedCurrencies();
};

const getCurrencyRate = async (curFrom, curTo) => {
    let result = {
        ok: false,
        res: "Something went wrong, please try later",
        code: null,
    };
    try {
        let res = await fetch(`${API_URL}/${curFrom}.min.json`);
        if (!res.ok) return { ...result, code: res.status };
        res = await res.json();
        // console.log(res);
        return { ok: true, res: res[curFrom][curTo] };
    } catch (err) {
        return { ...result, res: err.message };
    }
};

const handleAmtChange = async (evtOrEl) => {
    lastTouchedAmt = evtOrEl.target || evtOrEl;
    const amtToChange = lastTouchedAmt == amtA ? amtB : amtA;
    const curFrom = lastTouchedAmt == amtA ? curA.value : curB.value;
    const curTo = lastTouchedAmt == amtA ? curB.value : curA.value;
    amtToChange.disabled = true;
    if (typeof CACHED_DATA[`${curFrom}/${curTo}`] === "undefined") {
        const { ok, res, code } = await getCurrencyRate(curFrom, curTo);
        if (!ok) {
            console.log(res, code);
            return;
        }
        CACHED_DATA[`${curFrom}/${curTo}`] = res;
    }
    const finalAmt = +(
        lastTouchedAmt.value * CACHED_DATA[`${curFrom}/${curTo}`]
    ).toFixed(2);
    amtToChange.disabled = false;
    amtToChange.value = finalAmt;
};

const clearInputValue = () => {
    amtA.value = "";
    amtB.value = "";
};

amtA.addEventListener("keyup", handleAmtChange);
amtB.addEventListener("keyup", handleAmtChange);
curA.addEventListener("change", handleCurChange);
curB.addEventListener("change", handleCurChange);
swapBtn.addEventListener("click", swapCurrencies);
clrBtnA.addEventListener("click", clearInputValue);
clrBtnB.addEventListener("click", clearInputValue);

appendCurrencies(curA, SELECTED_CURRENCIES[0]);
appendCurrencies(curB, SELECTED_CURRENCIES[1]);
loadFlagImgs();

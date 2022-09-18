
const txtBox = document.querySelector("#txtBox")
const copyMsg = document.querySelector("#copyMsg")
const pwdLen = document.querySelector("#pwdLen")
const genBtn = document.querySelector("#genBtn")
const errorMsg = document.querySelector("#errorMsg")
const optsGroup = document.querySelector("#optsGroup")
const alphaLowerCheck = document.querySelector("#alphaLowerCheck")
const alphaUpperCheck = document.querySelector("#alphaUpperCheck")
const symbolsCheck = document.querySelector("#symbolsCheck")
const numsCheck = document.querySelector("#numsCheck")

const NUMS_ARR = "0123456789".split("")
const ALPHA_UPPER_ARR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const ALPHA_LOWER_ARR = ALPHA_UPPER_ARR.map(el=>el.toLowerCase())
const SYMBOLS_ARR = "!@#$%&*(){}<>,.?+-*/".split("")

let isOptionsValid = true

const generateRandomString = ()=>{
    // console.log('GENERATING')
    let resPwdStr = ""
    let i = 0
    let finArr = []
    if (alphaLowerCheck.checked) finArr = finArr.concat(ALPHA_LOWER_ARR)
    if (alphaUpperCheck.checked) finArr = finArr.concat(ALPHA_UPPER_ARR)
    if (numsCheck.checked) finArr = finArr.concat(NUMS_ARR)
    if (symbolsCheck.checked) finArr = finArr.concat(SYMBOLS_ARR)
    /* Suffling the final array */
    finArr.forEach(function(el,i,arr){
        const ranInx = parseInt(Math.random()*arr.length)
        arr[i] = arr[ranInx]
        arr[ranInx] = el
    })
    // console.log(finArr)
    while (i<+pwdLen.value) {
        resPwdStr += finArr[Math.floor(Math.random()*/* 1e7)%finArr.length */finArr.length)]
        i += 1
    }
    /* Regenerate if new password mactches previous */
    if (resPwdStr===txtBox.value) {
        // console.log("MATCHES")
        return generateRandomString()
    }
    return resPwdStr
}

const handleGenBtnClick = ()=>{
    if (!isOptionsValid) return
    txtBox.value = generateRandomString()
}

const handleSpaceBarClick = e=>{
    if (e.target.tagName!=='BODY' || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey || e.code!=='Space'||!isOptionsValid) return
    txtBox.value = generateRandomString()
}

const copyPwd = e=>{
    navigator.clipboard.writeText(e.target.value)
    copyMsg.textContent = 'Copied'
    setTimeout(()=>copyMsg.textContent='Click to copy', 300)
}

const handleOptionsChange = ()=>{
    const checkInputs = [...optsGroup.querySelectorAll("input")].reduce((len,curEl)=>len+curEl.checked,0)
    isOptionsValid = checkInputs && /^\d+(e\d+)?$/.test(pwdLen.value)
    genBtn.classList.toggle("is-disabled",!isOptionsValid)
    errorMsg.classList.toggle("is-visible",!isOptionsValid)
}

txtBox.value = generateRandomString()

document.addEventListener('keyup', handleSpaceBarClick)
txtBox.addEventListener('click', copyPwd)
pwdLen.addEventListener("keyup", handleOptionsChange)
genBtn.addEventListener("click", handleGenBtnClick)
;[pwdLen, alphaLowerCheck, alphaUpperCheck, symbolsCheck, numsCheck].forEach(el=>el.addEventListener("change", handleOptionsChange))

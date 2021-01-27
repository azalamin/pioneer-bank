const loginForm = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");
const depositBalance = document.getElementById("deposit-balance");
const withdrawBalance = document.getElementById("withdraw-balance");
const mainBalance = document.getElementById("main-balance");
const depositInput = document.getElementById("deposit-inp");
const withdrawInput = document.getElementById("withdraw-inp");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const loginBtn = document.getElementById("login");

// Login Button Event Handler
loginBtn.addEventListener("click", function () {
  loginForm.style.display = "none";
  transactionArea.style.display = "block";
});

// Deposit button event handler
depositBtn.addEventListener("click", function () {
  const depositAmount = depositInput.value;
  const depositNumber = parseFloat(depositAmount);

  const currentDeposit = depositBalance.innerText;
  const currentNumber = parseFloat(currentDeposit);
  const totalDeposit = currentNumber + depositNumber;
  if (isNaN(totalDeposit)) {
    alert("Check Your Input");
  } else {
    depositBalance.innerText = totalDeposit;
  }
  depositInput.value = "";
  const mainAmount = mainBalance.innerText;
  let mainNumber = parseFloat(mainAmount);
  const TotalAmount = mainNumber + depositNumber;
  if (!isNaN(TotalAmount)) {
    mainBalance.innerText = TotalAmount;
  }
});

// Withdraw btn event handler
withdrawBtn.addEventListener("click", function () {
  const currentwithdraw = withdrawInput.value;
  const currentWithdrawNumber = parseFloat(currentwithdraw);

  const currentWithdrawBalance = withdrawBalance.innerText;
  const currentWithdrawConvertToNum = parseFloat(currentWithdrawBalance);
  const totalWithdraw = currentWithdrawNumber + currentWithdrawConvertToNum;

  if (isNaN(totalWithdraw)) {
    alert("Check your input");
  } else {
    withdrawBalance.innerText = totalWithdraw;
  }
  const currentDepositAmount = mainBalance.innerText;
  const currentDepositAmountToNum = parseFloat(currentDepositAmount);
  const remainBalance = currentDepositAmountToNum - totalWithdraw;
  if (!isNaN(remainBalance)) {
    mainBalance.innerText = remainBalance;
  }
  withdrawInput.value = "";
});

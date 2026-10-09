#Pseudo code
#created a file called control_flow_atm.py
#create a variable called balance with an int value representing the money in the user's account
#create a variable called pin with an int value 
#prompt the user to enter their pin
#if the pin matches, display balance
#if they dont match, print out a message notifying them

#Also add; if the pin matches, give a prompt to withraw or deposit
#once they make the choice, prompt them to enter an amount
#subtract the value to their account balance and display the updated balance

#Begin!
balance = 1000
pin = 1234
withraw ='1'
deposit ='2'

pin_input = int(input("Enter your pin :"))

if pin_input == pin:
  print ("Your current balance is",balance)
  transaction_choice = input("input 1 to withraw or 2 to deposit?")
  if transaction_choice == withraw:
    withdrawal_amount=(int(input("enter how much you want to witdraw")))
    if withdrawal_amount > balance:
      print("You cannot withdraw more money than you have in your account.")
    else:
      new_balance=balance-withdrawal_amount # Subtract the value from the balance
      print ("Your current balance is",new_balance)
  elif transaction_choice == deposit:
    deposit_amount =(int(input ("how much do you want to deposit?")))
    new_balance=balance+deposit_amount # Subtract the value from the balance
    print ("Your current balance is",new_balance)
else:
  print("Invalid pin, Please start again")
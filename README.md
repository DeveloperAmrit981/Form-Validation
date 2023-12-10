# Form-Validation
This is a form validation project using Javascript. 

There are 4 inputs fields.

Globally extra spaces at the beginning and end will be trimmed and only one space will be kept in between words before passing to the database. 


    1. Full Name
          User must enter first and last name
          Invalid message and error will be shown
          valid message will be shown once the input is vaild
          
    2. Phone
          A max of 10 numbers allowed
          phone number cannot contain characters other than numbeers.
          user must enetr 10 diits
          a space will be added after the fourth and the seventh digit to format it in this way (XXXX XXX XXX).it will autoatically happen while user is providing inputs
          each type of error message will be shown based on conditions. like "Please enter digits only" if user input is not a digit. 
          
    3. Email
          Email must contain characters before "@" and at least 1 char between "@" and "." followed by at least 2 chars for email validation
          messages will be shown accordingly
          
    4. Message
          Messages must be at least 40 chars long.
          A counter will show the chars left while user provides input.
          After the minimum char length is met it will show validation message and keep the counter on to showing how many chars is left to reach max-allowed charlength of 300.


    Submit Button:
          if Submit btn is licked before all fields validation it will show error message
          once all fields are validated it will show a submitting 0.5s -submitted 0.5s message
          Then the form will be submitted

          (promise and prevent default function  used to prevent the browser from immmediately submitting the form before showing the submited message)
          
  
![submitted](https://github.com/DeveloperAmrit981/Form-Validation/assets/147136907/3e4b512a-1cc8-4aba-90db-1e0b93339333)

          
![invalidInputs](https://github.com/DeveloperAmrit981/Form-Validation/assets/147136907/f685c1c2-7d09-4486-89a5-c0a186439fd3)



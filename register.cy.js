describe('Jarvis Reach User Registration Page', () => {
    before(() => {
      cy.fixture('credentials').then((data) => {
        Cypress.env('data', data);  
      });
    });
    
  
    beforeEach(() => {
      cy.visit('http://localhost:3000/register');
    })
  
  
  it('verify the url', () => {   
    cy.url('http://localhost:3000/register');
  })

  it('Verify if Register Page contains this "Create your free account" text', () => {   
    cy.contains('Create your free account').should('be.visible');
  })

  it('verify the Jarvis Reach logo', () => {
    cy.get('.navbar-brand > img').should('be.visible')
  })

  it('verify the linkedin button', () => {
    cy.get('.linked-google > :nth-child(1)').should('be.visible')
  })

  it('verify the Google button', () => {
    cy.get('.linked-google > :nth-child(2)').should('be.visible')
  })

  it('verify the First name text field', () => {
    cy.get('#firstName').should('be.visible')
  })

  it('verify the Second name text field', () => {
    cy.get('#lastName').should('be.visible')
  })

  it('verify the Email Address text field', () => {
    cy.get('#email').should('be.visible')
  })

  it('verify the password field exist or not', () => {
    cy.get('#password').should('be.visible')
  })

  it('check the Confirm Password Text feild', () => {
    cy.get('#confirmPassword').should('be.visible')
  })

  it('verify the upper checkBox is visible or not', () => {
    cy.get('#newsUpdates').should('be.visible')
  })

  it('verify the text "I agree to receive occasional news and updates"', () => {
    cy.get(':nth-child(1) > .form-check-label').should('be.visible')
  })

  it('verify the lower checkBox is visible or not', () => {
    cy.get('#termsConditions').should('be.visible')
  })

  it('verify the text "I accept the Terms & Conditions and Privacy Policy" ', () => {
    cy.get(':nth-child(2) > .form-check-label').should('be.visible')
  })

  it('verify just the "Terms & Conditions" option', () => {
    cy.get('[href="https://jarvis.techemulsion.com/terms-of-service"]').should('be.visible')
  })

  it('verify just the "Privacy Policy"', () => {
    cy.get('[href="https://jarvis.techemulsion.com/privacy-policy"]').should('be.visible')
  })

  it('verify the right side block of text', () => {
    cy.get('.grow-faster').should('be.visible')
    cy.contains('Close More Deals Grow Faster')
    cy.get('.grow-faster > p')
    cy.get('ul > :nth-child(1)')
    cy.get('ul > :nth-child(2)')
    cy.get('ul > :nth-child(3)')
    cy.get('.img-fluid')
  })

  it('verify the "Sign up" button', () => {
    cy.get('#signup-btn').should('be.visible')
  })

  it('verify the text "Already have an account? Sign in"', () => {
    cy.get('.create-account').should('be.visible')
  })

  it('verify just the "sign in" button', () => {
    cy.get('.create-account > a').should('be.visible')
    cy.get('.create-account > a').click()
    cy.url().should('include', '/login')
    })

  it('verify that when you have not filled any text field. so, the Sign up button will remain disabled', () => {
    cy.get('#firstName').should('have.value', '')
    cy.get('#lastName').should('have.value', '')
    cy.get('#email').should('have.value', '')
    cy.get('#password').should('have.value', '')
    cy.get('#confirmPassword').should('have.value', '')
    cy.get('#newsUpdates').should('not.be.checked')
    cy.get('#termsConditions').should('not.be.checked')
    cy.get('#signup-btn').should('be.disabled')
  })

  it('verify that when you have filled just the First Name text field. so, the Sign up button will remain disabled', () => {
    cy.get('#firstName').type('FirstName')
    cy.get('#lastName').should('have.value', '')
    cy.get('#email').should('have.value', '')
    cy.get('#password').should('have.value', '')
    cy.get('#confirmPassword').should('have.value', '')
    cy.get('#newsUpdates').should('not.be.checked')
    cy.get('#termsConditions').should('not.be.checked')
    cy.get('#signup-btn').should('be.disabled')
  })

  it('verify that when you have just filled the Second Name text field. so, the Sign up button will remain disabled', () => {
    cy.get('#firstName').should('have.value', '')
    cy.get('#lastName').type('SecondName')
    cy.get('#email').should('have.value', '')
    cy.get('#password').should('have.value', '')
    cy.get('#confirmPassword').should('have.value', '')
    cy.get('#newsUpdates').should('not.be.checked')
    cy.get('#termsConditions').should('not.be.checked')
    cy.get('#signup-btn').should('be.disabled')
  })

  it('verify that when you have just filled the email text field. so, the Sign up button will remain disabled', () => {
    cy.get('#firstName').should('have.value', '')
    cy.get('#lastName').should('have.value', '')
    cy.get('#email').type('example@gmail.com')
    cy.get('#password').should('have.value', '')
    cy.get('#confirmPassword').should('have.value', '')
    cy.get('#newsUpdates').should('not.be.checked')
    cy.get('#termsConditions').should('not.be.checked')
    cy.get('#signup-btn').should('be.disabled')
  })

  it('verify that when you have just filled the password text field. so, the Sign up button will remain disabled', () => {
    cy.get('#firstName').should('have.value', '')
    cy.get('#lastName').should('have.value', '')
    cy.get('#email').should('have.value', '')
    cy.get('#password').type('Password123')
    cy.get('#confirmPassword').should('have.value', '')
    cy.get('#newsUpdates').should('not.be.checked')
    cy.get('#termsConditions').should('not.be.checked')
    cy.get('#signup-btn').should('be.disabled')
  })

  it('verify that when you have just filled the confirm password text field. so, the Sign up button will remain disabled', () => {
    cy.get('#firstName').should('have.value', '')
    cy.get('#lastName').should('have.value', '')
    cy.get('#email').should('have.value', '')
    cy.get('#password').should('have.value', '')
    cy.get('#confirmPassword').type('Password123')
    cy.get('#newsUpdates').should('not.be.checked')
    cy.get('#termsConditions').should('not.be.checked')
    cy.get('#signup-btn').should('be.disabled')
  })

  it('verify that when you have just checked the first / upper checkBox button. so, the Sign up button will remain disabled', () => {
    cy.get('#firstName').should('have.value', '')
    cy.get('#lastName').should('have.value', '')
    cy.get('#email').should('have.value', '')
    cy.get('#password').should('have.value', '')
    cy.get('#confirmPassword').should('have.value', '')
    cy.get('#newsUpdates').click().should('be.checked')
    cy.get('#termsConditions').should('not.be.checked')
    cy.get('#signup-btn').should('be.disabled')
  })

  it('verify that when you have just checked the Socond / lower checkBox button. so, the Sign up button will remain disabled', () => {
    cy.get('#firstName').should('have.value', '')
    cy.get('#lastName').should('have.value', '')
    cy.get('#email').should('have.value', '')
    cy.get('#password').should('have.value', '')
    cy.get('#confirmPassword').should('have.value', '')
    cy.get('#newsUpdates').should('not.be.checked')
    cy.get('#termsConditions').click().should('be.checked')
    cy.get('#signup-btn').should('be.enabled')
  })

  it('should show "User already exists" notification when signing up with an existing user', () => {
    const data = Cypress.env('data'); 
    cy.get('#firstName').type('FirstName');
    cy.get('#lastName').type('LastName');
    cy.get('#email').type(data.email);
    cy.get('#password').type(data.password);
    cy.get('#confirmPassword').type(data.password);
    cy.get('#newsUpdates').click().should('be.checked');
    cy.get('#termsConditions').click().should('be.checked');
    cy.get('#signup-btn').should('be.enabled').click().wait(500);
    cy.contains('User already exists');
  });
  

  it('should show error for invalid email format because of lack of @', () => {
    const data = Cypress.env('data'); 
    cy.get('#firstName').type('FirstName');
    cy.get('#lastName').type('LastName');
    cy.get('#email').type('userexamplegmail.com'); 
    cy.get('#password').type(data.password); 
    cy.get('#confirmPassword').type(data.password);
    cy.get('#newsUpdates').click().should('be.checked');
    cy.get('#termsConditions').click().should('be.checked');
    cy.get('#signup-btn').should('be.enabled').click().wait(500);
    cy.contains('Invalid email format'); 
  });
  

  it('when the lower checkBox is checked and click on "sign up" button, the text fields should show some error messages and should not to be logged in ', () => {
    cy.get('#termsConditions').click().should('be.checked')
    cy.get('#signup-btn').should('be.enabled').click().wait(500)
    cy.contains('First Name is required')
    cy.contains('Last Name is required')
    cy.contains('Email is required')
    cy.contains('Password is required')
    cy.contains('Please confirm your password')
  })

  it('only first name text field is filled while others are left empty and click on sign up', () => {
    cy.get('#firstName').type('FirstName')
    cy.get('#termsConditions').click().should('be.checked')
    cy.get('#signup-btn').should('be.enabled').click().wait(500)
    cy.contains('Email is required')
    cy.contains('Last Name is required')
    cy.contains('Password is required')
    cy.contains('Please confirm your password')
  })

  it('when only last name text field is filled and click on sign up button', () => {
    cy.get('#lastName').type('LastName')
    cy.get('#termsConditions').click().should('be.checked')
    cy.get('#signup-btn').should('be.enabled').click().wait(500)
    cy.contains('First Name is required')
    cy.contains('Email is required')
    cy.contains('Password is required')
    cy.contains('Please confirm your password')
  })

  it('when only email text field is filled and click on sign up button', () => {
    cy.get('#email').type('userexample@gmail.com');
    cy.get('#termsConditions').click().should('be.checked')
    cy.get('#signup-btn').should('be.enabled').click().wait(500)
    cy.contains('First Name is required')
    cy.contains('Last Name is required')
    cy.contains('Password is required')
    cy.contains('Please confirm your password')
  })

  it('should show required field errors when only password is filled and signup button is clicked', () => {
    const data = Cypress.env('data'); 
    cy.get('#password').type(data.password); 
    cy.get('#termsConditions').click().should('be.checked');
    cy.get('#signup-btn').should('be.enabled').click().wait(500);
    cy.contains('First Name is required');
    cy.contains('Last Name is required');
    cy.contains('Email is required');
    cy.contains('Please confirm your password');
  });
  

  it('should show required field errors when only confirm password is filled and signup button is clicked', () => {
    const data = Cypress.env('data'); 
    cy.get('#confirmPassword').type(data.password);
    cy.get('#termsConditions').click().should('be.checked');
    cy.get('#signup-btn').should('be.enabled').click().wait(500);
    cy.contains('First Name is required');
    cy.contains('Last Name is required');
    cy.contains('Email is required');
    cy.contains('Password is required');
  });
  

})
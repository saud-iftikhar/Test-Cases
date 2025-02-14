describe('Jarvis Reach Login Page', () => {
  before(() => {
    cy.fixture('credentials').then((data) => {
      Cypress.env('data', data);  
    });
  });
  

  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  })
  

  it('Verify if Login Page is reachable', () => {   
    cy.contains('Welcome Back!').should('be.visible');
  })

  it('verify the url', () => {   
    cy.url('http://localhost:3000/login');
  })

  it('verify the Jarvis Reach text in left upper corner', () => {   
    cy.get('body')
  })

  it('verify the sign in option with linkedin ', () => {  
    cy.get('.login-center > :nth-child(2)')
  })

  it('verify the sign in option with Google', () => {   
    cy.get('[style="margin-top: 0px;"]')
  })

  it('verify the text or use your work email', () => {   
    cy.get('h6')
  })

  it('verify the email text field', () => {
    cy.get('#email')
  })

  it('verify the password text field', () => {
    cy.get('#password')
  })

  it('verify the forget password button', () => {
    cy.get(':nth-child(3) > .MuiTypography-root').click().wait(500);
    cy.url().should('include', '/forget-password');
    cy.get('.MuiBox-root > svg').click();
  })

  it('verify the sign in button', () => {
    cy.get('.MuiButtonBase-root');
  })

  it('verify the text Need an account? ', () => {  
    cy.contains('Need an account').should('be.visible');
  })

  it('verify the option text Create an account for free', () => {
    cy.get('.MuiTypography-root > p')
  })

  it('should show Required error for password', () => {   
    cy.get('#email').type('userexample@gmail.com');
    cy.get('#signin-btn').click().wait(1000);
    cy.contains('Required');
  })

  it('should show the invalid email address ', () => {
    cy.get('#password').type('userpassword');
    cy.get('#signin-btn').click().wait(1000);
    cy.contains('Required');
  })

  it('should not login successfully when account is not exist', () => {
    cy.get('#email').type('user@example.com')
    cy.get('#password').type('Password123');
    cy.get('#signin-btn').click().wait(1000);
    cy.contains('Account does not exists');
  })

  it('clicking sign-in button without filling email and password fields', () => {
    cy.get('#signin-btn').click();
    cy.contains('Required');
  })

  it('should login successfully with valid email and password', () => {
    const data = Cypress.env('data');  
    cy.get('#email').type(data.email);
    cy.get('#password').type(data.password);
    cy.get('#signin-btn').click();
    cy.url().should('include', '/folder');
    cy.contains('Login successful');
  });
  

  it('should show error for invalid email format because of lack of @', () => {
    cy.get('#email').type('userexample.com');
    cy.get('#password').type('ValidPassword123');
    cy.get('#signin-btn').click();
    cy.contains('Invalid email address')
  })

  it('should display the "Login with Google" button', () => {
     cy.get('#google-login-btn').should('be.visible');
  })
  

  it('verify that Google login popup window opens  when clicked', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });
    cy.get('#google-login-btn').click();
    cy.get('@windowOpen').should('have.been.called');
  });
  
  
  it('linkedin popup window testing when clicked', () => {
    cy.get('#linkedin-login-btn').click();  
  });
  
   
  
      

})
 
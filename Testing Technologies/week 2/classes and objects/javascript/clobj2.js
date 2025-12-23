 
//1.create a user class
  class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    hello() {
      console.log(`hello, ${this.firstName} ${this.lastName}`);
    }
  }

  const user1 = new User("John", "Doe");
  user1.hello();

  const user2 = new User("Jane", "Doe");
  user2.hello();      
 
//setters and getters 
  class User2 {  
      constructor() {  
        this._firstName = "";  
        this._lastName = "";  
      }  

    // Getter   
      get firstName() {  
        return this._firstName;  
      }  

    // Setter 
      set firstName(firstName) {  
        this._firstName = firstName;  
      }  

    // Getter  
      get lastName() {  
        return this._lastName;  
      }  

    // Setter  
      set lastName(lastName) {  
        this._lastName = lastName;  
      }  

      hello() {  
        return "Hello World!";  
      }  
  }  

    const user = new User2();

  // Set method  
    user.firstName = "John";  
    user.lastName = "Doe";  

    const fullName = user.firstName + " " + user.lastName;  
    console.log(`${user2.firstName} ${user2.lastName}`);  


//Task 2    
  class User3 {
    constructor() {
      this._username = '';
    }

    set username(username) {
      this._username = username;
    }

    get lastName() {  
      return this._lastName;  
    }  
  }

  class Admin extends User3 {
     constructor() {
       super()
    }

    expressYourRole() {
      return "Admin";
    }

    sayHello() {
      return `Hello admin ${this._username}`;
    }
  }

  const admin = new Admin();
  admin.username = "Balthazar";
  console.log(admin.sayHello());

//Task 4
  class User4 {
    constructor() {
      this._numberOfArticles = 0;
    }

    set numberOfArcitcles(numberOfArcitcles) {
      this._numberOfArcitcles = numberOfArcitcles;
    }

    get numberOfArcitcles() {
      return this._numberOfArcitcles;
    }

    calcScores() {}
  }

  class Author extends User4 {
    constructor() {
      super();
    }

  calcScores() {
    return this._numberOfArcitcles * 10 + 20;
    }
  }

  class Editor extends User4 {
    constructor() {
      super();
    }

    calcScores() {
      return this._numberOfArcitcles * 6 + 15;
    }
  }

  const author = new Author();
  author.numberOfArcitcles = 8;
  console.log(author.calcScores());

  const editor = new Editor();
  editor._numberOfArcitcles = 15;
  console.log(editor.calcScores());


//Task 5
 class User5 {
    constructor() {
    }

    set username(username) {
        this._username = username;
    }

    get username() {
        return this._username;
    }
    stateYourRole() {
        throw new Error("Method cannot be called from here");
    }
  }

  class Admins extends User5 {
    constructor() {
      super();
    }

    stateYourRole() {
      return "admin";
    }
  }

  class Viewer extends User5 {
    constructor() {
      super();
    }
    stateYourRole() {
      return "viewer";
    }
  }


  const admins = new Admins();
  admin.username = "Balthazar";
  console.log(admins.stateYourRole());

  const viewer = new Viewer();
  viewer.username = "Melchior";
  console.log(viewer.stateYourRole());
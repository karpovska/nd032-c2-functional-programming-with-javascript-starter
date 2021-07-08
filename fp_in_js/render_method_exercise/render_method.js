// Here is the code from the example text

const root = document.getElementById('root')

const Welcome = () => {
    return `Welcome to my Javascript Program!`
}

const Menu = (show) => {
    if(show) {
        return (`
                <nav>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                    </ul>
                </nav>
            `)
   } else {
       return `<nav>Menu</nav>`;
       console.log("dsdfsdf!");
   }
}

const App = () => {
    return `
        <h1>${Welcome()}<h1>
        <div> I EXIST! </div>
        <menu>${Menu(true)}<menu>
    `
}

const render = root => {
    root.innerHTML = App()
}

render(root)

// Add a new Menu component that takes in a show argument which is either true or false
// Show this content if show is true:
{/* <nav>
    <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Login</li>
    </ul>
</nav> */}

// and this content if show is false:
{/* <nav>Menu</nav> */ }

// Your Code Here

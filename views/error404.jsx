const React = require("react")
const Def = require("./layouts/default")

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Sorry. We can't find this page.</p>
                <div>
                <img src="https://placekitten.com/200/300" alt="A cute kitten" />
                <p>Credit for image from <a href="placekitten.com">Place Kitten</a></p>
                </div>

            </main>
        </Def>
    )
}

module.exports = error404
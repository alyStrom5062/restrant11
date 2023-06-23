const React = require("react")
const Def = require("../layouts/default")

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form action="/places" method="POST">
                    <div className="form-group">
                    <label htmlFor="name">Restaurant Name</label>
                        <input className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            required />
                    </div> 
                    <div className="form-group">
                    <label htmlFor="pic">Restaurant Picture</label>
                        <input className="form-control"
                            type="url"
                            name="pic"
                            id="pic"
                             />
                    </div> 
                    <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control"
                            type="text"
                            name="cuisines"
                            id="cuisines"
                            required
                             />
                    </div> 
                    <div className="form-group">                            
                    <label htmlFor="city">City</label>
                        <input className="form-control"
                            type="text"
                            name="city"
                            id="city"
                            required />
                    </div> 
                    <div className="form-group">
                    <label htmlFor="state">State</label>
                        <input className="form-control"
                            type="text"
                            name="state"
                            id="state"
                            required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="founded">Founded Year</label>
                        <input className="form-control"
                            type="text"
                            name="founded"
                            id="founded"
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="founded">Founded Year</label>
                        <input className="form-control"
                            type="number"
                            id="founded"
                            name="founded"
                            value={new Date().getFullYear()}
                        />
                    </div>

                    <input className="btn btn-primary" type="submit" value="Add Place"/>
                    
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form
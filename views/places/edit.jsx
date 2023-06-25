const React = require("react")
const Def = require("../layouts/default")

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`} >

                <div className="row"> 

                    <div className="form-group col-sm-6">
                    <label htmlFor="name">Restaurant Name</label>
                        <input className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            value={data.name}
                            required />
                    </div> 
                    <div className="form-group col-sm-6">
                    <label htmlFor="pic">Restaurant Picture</label>
                        <input className="form-control"
                            type="url"
                            name="pic"
                            id="pic"
                            value={data.pic}
                             />
                    </div> 
                    <div className="form-group col-sm-6">
                    <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control"
                            type="text"
                            name="cuisines"
                            id="cuisines"
                            value={data.cuisines}
                            required
                             />
                    </div> 
                    <div className="form-group col-sm-6">                            
                    <label htmlFor="city">City</label>
                        <input className="form-control"
                            type="text"
                            name="city"
                            id="city"
                            value={data.city}
                            required />
                    </div> 
                    <div className="form-group col-sm-6">
                    <label htmlFor="state">State</label>
                        <input className="form-control"
                            type="text"
                            name="state"
                            id="state"
                            value={data.state}
                            required />
                    </div>                    
                    <div className="form-group col-sm-6">
                    <label htmlFor="founded">Founded</label>
                        <input className="form-control"
                            type="text"
                            name="founded"
                            id="founded"
                            value={data.place.founded}
                            required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update Place"/>

                </div> 

                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
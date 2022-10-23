import React from "react"

function Search() {
  return (
    <div className="container">

    
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s3">
            <input id="icon_prefix" type="text" className="validate" />

            <label htmlFor="icon_prefix">First Name</label>
            <i className="material-icons prefix">clear</i>
          </div>

          <div class="input-field col s4">
            <select multiple>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">
                Coconut
              </option>
              <option value="mango">Mango</option>
            </select>
            <label>Materialize Multiple Select</label>
          </div>
          <div className="input-field col s3">
            <i className="material-icons prefix">city</i>
            <input id="icon_telephone" type="tel" className="validate" />
            <label htmlFor="icon_telephone">city</label>
          </div>
        </div>
      </form>
    </div>
      </div>
  )
}

export default Search

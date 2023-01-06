export function LoginInpage({setView}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form className="form">
                        <div className="input-group">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="email">Email</label></td>
                                        <td> <input type="email" name="email" placeholder="nome@email.com.br" /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="password">Password</label></td>
                                        <td>  <input type="password" name="password" /></td>
                                        
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                        <button className="btn btn-success me-3">Login</button>
                        <button className="btn btn-success" onClick={() => setView("home")}>Cancel</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
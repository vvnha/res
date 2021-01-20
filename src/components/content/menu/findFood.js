import { Component } from 'react';

class FindFood extends Component {
    render() {
        return (
            <div className="container">
                <form class="form-inline d-flex justify-content-center md-form form-sm mt-0" style={{ margin: "10px" }}>
                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" />
                    <button type="button" class="btn btn-outline-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg> Search
                    </button>
                </form>
            </div>
        );
    }
}
export default FindFood;
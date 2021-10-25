import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <table className="Searchbar">
                <tr>
                    <td>
                        <input type={"text"} size={"36"} placeholder={"검색어를 입력하세요"}/>
                    </td>
                </tr>
            </table>
        )
    }
}

export default SearchBar;
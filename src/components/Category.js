import React, { Component } from "react";

class Category extends Component {
    state = {
        category_id: null
    }

    render() {
        const { categories } = this.props
        if (categories) {
        let categoriesList = categories.map((category) => {
            return (
            <div className="list-item" key={category.id} onClick={() => {this.props.onChooseCategory(category.id)}}>
                {category.title}
            </div>
            )
        }
        )
        return <div className="list-container">{categoriesList}</div>
    }
}
}   

export default Category;

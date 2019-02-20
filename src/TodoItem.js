import React from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // 子组件向父组件传值

    handleDelete() {
        console.log(this.props.index);
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

    render() {
        const {content} = this.props
        return (
            // 父组件用props传递参数
            <div onClick={this.handleDelete}>{content}</div>
        )
        
    }
}

export default TodoItem;
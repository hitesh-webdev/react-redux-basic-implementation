import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions/';

class CoursesPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(event) {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
        this.textInput.value = "";
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}

                <h2>Add Course</h2>
                <form onSubmit={this.onClickSave}>
                    <input 
                        type="text"
                        onChange={this.onTitleChange}
                        ref={(input) => { this.textInput = input; }} /> 
                    <input 
                        type="submit"
                        value="Save" />
                </form>
            </div>
        );
    }

} 

// Note- When the ref attribute is used on an HTML element, the ref callback receives the underlying DOM element as its argument. For example, this code uses the ref callback to store a reference to a DOM node.

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

/*

Note- If we do not define mapDispatchToProps(optional parameter), react-redux will automatically inject a 'dispatch' property on the 'props' object which lets us fire off an action that reducers will handle.

'ownProps' are the props passed to this component by the parent component.

*/

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// Note- The 'dispatch' parameter gets injected in by the connect() function.
// We wrap our actions in a call to dispatch and that triggers our flow through redux.

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// The connect function here returns a function that immediately gets called with our container component as an argument.


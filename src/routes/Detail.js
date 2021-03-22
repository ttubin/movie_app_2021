import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) { // 영화를 클릭하지 않았을때만 HOME으로 가게 만듬.
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;

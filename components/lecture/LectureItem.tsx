import React from "react";
import { Lecture } from '../../interface/lecture'
import TagList from "../tags/tagList";

interface Props {
    lecture: Lecture;
}

const LectureItem = ({ lecture }: Props): JSX.Element => {
    const {thumb, tags, title, description } = lecture;
    return (
        <div>
            <img src={thumb} alt="초격차 패키지" />
            <TagList tagListData={tags} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default LectureItem;
import React from "react";
import useLectures from "hooks/useLectures";
import LectureItem from "./LectureItem";
import { Lecture } from "interface/lecture";

const LectureList = (): JSX.Element => {
    const { isLoading, data } = useLectures("Programming");
    if (isLoading) {
        return <div>Loading..</div>
    }
    
    const lectureItems = data.lectureList.map((lecture: Lecture) => {
        return <LectureItem key={lecture.id} lecture={lecture} />
    });

    return (
        <div title="lectureList">
            {lectureItems}
        </div>
    )
}

export default LectureList;
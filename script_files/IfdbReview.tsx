import {h} from "dom-chef";

export default function IfdbReview(
    helpful: [number, number]|null,
    title: string,
    date: string,
    author: string,
    text: HTMLElement
) {
    return (
        <div>
            {helpful !== null &&
            <div className="smallhead">
                <span className="details">
                    {helpful[0]} of {helpful[1]} people found the following review helpful:
                 </span>
            </div>
            }

            {/* <img src="/img/blank.gif" className="star5" title="5 Stars" /> */}
            <b>{title}</b><span className="details">, {date}</span>
            <br />
            <div className="smallhead">
                <span className="details">
                    by <a className="authorName">{author}</a>
                </span>
            </div>
            {text}
            <br/>
        </div>
    );
}

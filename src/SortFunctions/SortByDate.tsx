import { articleI } from "../Actions/newsActionTypes";
import { directionI } from "../Table";
export const sortByDate = (array: articleI[], order: directionI) => {
  array.sort(function (a, b) {
    let dateA: any = new Date(a.publishedAt.substr(0, a.publishedAt.indexOf("T"))); //prettier-ignore
    let dateB: any = new Date(b.publishedAt.substr(0, b.publishedAt.indexOf("T"))); //prettier-ignore

    if (order === "asc") {
      return dateA - dateB;
    } else return dateB - dateA;
  });
};

export default sortByDate
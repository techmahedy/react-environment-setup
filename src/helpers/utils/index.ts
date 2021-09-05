import moment from "moment";

export const todayDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}

export const pastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}

export const todayDateTime = () => {
    const today = new Date();
    return {
        start: moment(today).startOf('day').toDate(),
        end: moment(today).endOf('day').toDate()
    }
}

export const getStartToEndDateTime = (date: string) => {
    const today = new Date(date);
    return {
        start: moment(today).startOf('day').toDate(),
        end: moment(today).endOf('day').toDate()
    }
}

//disable all past date from calendar
export const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};
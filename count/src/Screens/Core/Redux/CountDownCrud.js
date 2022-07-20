import axios from 'axios'

export function getExampleData() {
    return axios.get("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean");
}

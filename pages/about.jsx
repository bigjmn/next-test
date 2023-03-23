import { useFetch } from "../hooks/useFetch"
const About = () => {
    const { data, isPending, error } = useFetch()

    return (
        <div>
            <h1>Data: {data ? data : ""}</h1>
            <h1>Is Pending: {isPending ? "True" : "False"}</h1>
            <h1>Error: {error ? "True" : "False"}</h1>
        </div>
    )

}
export default About
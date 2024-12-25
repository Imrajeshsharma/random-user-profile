import axios from "axios";

export const getUsers = async (setUser, setLoading) => {
    try {
        axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
            .then((res) => {
                setUser(res?.data?.results)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                console.error("Error fetching user data:", error)
            });
    } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);

    }
}

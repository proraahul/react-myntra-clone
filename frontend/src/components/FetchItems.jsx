import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsActions } from "../store/itemsSlice";

const FetchItems = () => {
    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();
    // console.log(fetchStatus);

    useEffect(() => {
        if(fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusActions.markFetchingStarted());

        fetch("http://localhost:8080/items", { signal })
            .then((res) => res.json())
            .then(({items}) => {
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(fetchStatusActions.markFetchingFinished());
                dispatch(itemsActions.addInitialItems(items[0]));
            });

        return () => {
            controller.abort();
        };
    }, [fetchStatus]);

    return (
        <></>
    )
}

export default FetchItems
import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './ListStyle';

export default function FolderList() {
    const classes = useStyles();
    const [data, setData] = useState([])
    const [perPage, setPerPage] = useState(5)
    const addPage = () => {
        setPerPage(e => e + 5)
    }

    const url = `https://breakingbadapi.com/api/characters?limit=${perPage}`

    const fetchData = async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <List className={classes.root}>
                {
                    data.map((item) => (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt={''}
                                    src={item.img}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={item.name} secondary={item.status} />
                        </ListItem>
                    ))
                }
            </List>
            <button onClick={addPage}>Add</button>
        </>
    );
}

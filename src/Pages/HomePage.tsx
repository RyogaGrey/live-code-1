import React from "react";
import {Button} from "@mui/material";

export default function HomePage() {
    return (
        <>
            <h1>Домашняя страница</h1>
            <p>
                Перейдите на 
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => window.location.href = "/wells"}
                    style={{ marginLeft: '5px', marginRight: '5px' }}
                >
                    /wells
                </Button>, чтобы начать работать.
            </p>
        </>
    );
}
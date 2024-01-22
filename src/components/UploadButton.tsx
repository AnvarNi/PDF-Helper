'use client'

import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import { useState } from "react"
import { Button } from "./ui/button"
import { DialogContent } from "./ui/dialog"

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={(visible) => {
            if (!visible) {
                setIsOpen(visible)
            }
        }}>
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
                <Button>Загрузить PDF файл</Button>
            </DialogTrigger>

            <DialogContent>
                Окно загрузки
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton
import { Button } from 'primereact/button';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import React, { useRef } from 'react'

const Error = () => {
    const toast = useRef<Toast|null>(null);

    const accept = () => {
        toast.current && toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current && toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm = () => {
        confirmDialog({
            group: 'headless',
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    return (
        <>
        <Toast ref={toast} />
        <ConfirmDialog
            group="headless"
            content={({ headerRef, contentRef, footerRef, hide, message }) => (
                <div className="flex flex-column align-items-center p-5 surface-overlay border-round">
                    <div className="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                        <i className="pi pi-question text-5xl"></i>
                    </div>
                    <span className="font-bold text-2xl block mb-2 mt-4" ref={headerRef}>
                        {message.header}
                    </span>
                    <p className="mb-0" ref={contentRef}>
                        {message.message}
                    </p>
                    <div className="flex align-items-center gap-2 mt-4" ref={footerRef}>
                        <Button
                            label="Save"
                            onClick={(event) => {
                                hide(event);
                                accept();
                            }}
                            className="w-8rem"
                        ></Button>
                        <Button
                            label="Cancel"
                            outlined
                            onClick={(event) => {
                                hide(event);
                                reject();
                            }}
                            className="w-8rem"
                        ></Button>
                    </div>
                </div>
            )}
        /></>)
}

export default Error
import Link from "next/link"
import UploadButton from "./UploadButton"
import { MessageSquare, Plus, Trash } from "lucide-react"
import { Button } from "./ui/button"

const Dashboard = () => {
    return <main className="mx-auto max-w-7xl md:p-10">
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
            <h1 className="mb-3 font-bold text-5xl text-gray-900">
                Мои файлы
            </h1>
            <UploadButton />
        </div>

        <ul className='mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3'>
            <li className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg'>
                <Link
                    href=''
                    className='flex flex-col gap-2'>
                    <div className='pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                      <div className='h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500' />
                      <div className='flex-1 truncate'>
                        <div className='flex items-center space-x-3'>
                          <h3 className='truncate text-lg font-medium text-zinc-900'>
                            Имя файла
                          </h3>
                        </div>
                      </div>
                    </div>
                </Link>

                <div className='px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500'>
                    <div className='flex items-center gap-2'>
                      <Plus className='h-4 w-4' />
                      Дата создания
                    </div>

                    <div className='flex items-center gap-2'>
                      <MessageSquare className='h-4 w-4' />
                      Количество сообщений
                    </div>

                    <Button size='sm' className='w-full' variant='destructive'>
                      <Trash className='h-4 w-4' />
                    </Button>
                </div>
            </li>

            <li className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg'>
                <Link
                    href=''
                    className='flex flex-col gap-2'>
                    <div className='pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                      <div className='h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500' />
                      <div className='flex-1 truncate'>
                        <div className='flex items-center space-x-3'>
                          <h3 className='truncate text-lg font-medium text-zinc-900'>
                            Имя файла
                          </h3>
                        </div>
                      </div>
                    </div>
                </Link>

                <div className='px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500'>
                    <div className='flex items-center gap-2'>
                      <Plus className='h-4 w-4' />
                      Дата создания
                    </div>

                    <div className='flex items-center gap-2'>
                      <MessageSquare className='h-4 w-4' />
                      Количество сообщений
                    </div>

                    <Button size='sm' className='w-full' variant='destructive'>
                      <Trash className='h-4 w-4' />
                    </Button>
                </div>
            </li>

            <li className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg'>
                <Link
                    href=''
                    className='flex flex-col gap-2'>
                    <div className='pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                      <div className='h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500' />
                      <div className='flex-1 truncate'>
                        <div className='flex items-center space-x-3'>
                          <h3 className='truncate text-lg font-medium text-zinc-900'>
                            Имя файла
                          </h3>
                        </div>
                      </div>
                    </div>
                </Link>

                <div className='px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500'>
                    <div className='flex items-center gap-2'>
                      <Plus className='h-4 w-4' />
                      Дата создания
                    </div>

                    <div className='flex items-center gap-2'>
                      <MessageSquare className='h-4 w-4' />
                      Количество сообщений
                    </div>

                    <Button size='sm' className='w-full' variant='destructive'>
                      <Trash className='h-4 w-4' />
                    </Button>
                </div>
            </li>
        </ul>
    </main>
}

export default Dashboard
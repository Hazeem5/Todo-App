import { NextRequest,NextResponse } from "next/server"
import {connect} from '@/dbconfig/db'
import Todo from '@/module/todo'
import {v4} from 'uuid'
connect()
export async function GET(request : NextRequest) {
    try {
        const todos=await Todo.find({})
       return NextResponse.json({msg:"Found All Todos", success: true,todos} )
    } catch (error) {
       return NextResponse.json({msg:"issued happened"},{status:500})  
    }
}
export async function POST(request : NextRequest) {
    try {
        const reqbody=await request.json()
        const {desc}=reqbody
        const newTodo=new Todo({
            id:v4(),
            desc,  
            completed:false
        })
        const savedTodo=await newTodo.save()
       return NextResponse.json({msg:"Todo added", success: true,savedTodo} )
    } catch (error) {
       return NextResponse.json({msg:"issued happened"},{status:500})
        
    }
}

export async function DELETE(request : NextRequest) {
    try {
        await Todo.deleteMany({})
       return NextResponse.json({msg:"Todo clear", success: true} )
    } catch (error) {
       return NextResponse.json({msg:"issued happened"},{status:500})
    }
}
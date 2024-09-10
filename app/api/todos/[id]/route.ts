import { NextRequest,NextResponse } from "next/server"
import {connect} from '@/dbconfig/db'
import Todo from '@/module/todo'
import {v4} from 'uuid'

connect();
function getID(s:string)
{
    let data=s.split("/")
    return data[data.length-1]
}
export async function GET(request : NextRequest) {
    try {
        const path=request.nextUrl.pathname
        const id=getID(path)
        const todo=await Todo.findOne({id})
       return NextResponse.json({msg:"Found All Todos", success: true,todo} )
    } catch (error) {
       return NextResponse.json({msg:"issued happened"},{status:500})
        
    }
    
}

export async function DELETE(request : NextRequest) {
    try {
        const path=request.nextUrl.pathname
        const id=getID(path)
        await Todo.deleteOne({id})
       return NextResponse.json({msg:"Deleted Todos", success: true} )
    } catch (error) {
       return NextResponse.json({msg:"issued happened"},{status:500})   
    }
}

export async function PUT(request : NextRequest) {
    try {
        const path=request.nextUrl.pathname
        const id=getID(path)
        const reqbody=await request.json()
        const {desc,completed}=reqbody
        await Todo.updateOne({id},{$set:{desc,completed}})
       return NextResponse.json({msg:"Updated Todos", success: true} )
    } catch (error) {
       return NextResponse.json({msg:"issued happened"},{status:500})   
    }
}
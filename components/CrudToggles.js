import  EditIcon  from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const CrudToggles = () => {
    return(
        <div className="bg-gray-300 bg-opacity-70 w-[200px]">
            <div className="flex justify-between p-10 ">
                <EditIcon className="text-green-500 h-6"/>
                <EditIcon className="text-green-500 h-6"/>
                <EditIcon className="text-green-500 h-6"/>
{/* 
                <DeleteIcon />
                <AddIcon /> */}
            </div>
        </div>
    )
}

export default CrudToggles
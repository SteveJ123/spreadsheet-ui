import React, { useMemo, useState } from 'react';
import { useTable, useResizeColumns, useFlexLayout } from 'react-table';
import type { Column } from 'react-table';
import chevronDouble from "../src/assets/images/ChevronDouble.png"
import shape from "../src/assets/images/Shape.png"
import arrowSort from "../src/assets/images/ArrowSort.png"
import filter from "../src/assets/images/Filter.png"
import arrowOutfit from "../src/assets/images/ArrowAutofit.png"
import shape2 from "../src/assets/images/Shape2.png"
import shape4 from "../src/assets/images/Shape4.png"
import shape6 from "../src/assets/images/Shape6.png"
import link from "../src/assets/images/Link.png"
import shape8 from "../src/assets/images/Shape8.png"
import arrowSplit from "../src/assets/images/ArrowSplit.png"
import iconFrame from "../src/assets/images/Icon_frame.png"
import arrowSplit2 from "../src/assets/images/ArrowSplit2.png"
import shape14 from "../src/assets/images/Shape14.png"
import shape24 from "../src/assets/images/Shape24.png"
import jobRequest from "../src/assets/images/jobRequest.png"
import calendar from "../src/assets/images/Calendar.png"
import status from "../src/assets/images/Status.png"
import submitter from "../src/assets/images/Submitter.png"
import globe from "../src/assets/images/Globe.png"
import icon from "../src/assets/images/Icon.png"
import icon2 from "../src/assets/images/Icon2.png"
import arrowSplit4 from "../src/assets/images/ArrowSplit4.png"
import panel from "../src/assets/images/Panel.png"
import chevron from "../src/assets/images/CHevron.png"
import more from "../src/assets/images/More.png"
import search2 from "../src/assets/images/search2.png"
import notification from "../src/assets/images/Notification_bell.png"
import elipse from "../src/assets/images/Ellipse2.png"
import arrowSplitExtract from "../src/assets/images/ArrowSplitExtract.png"



type RowData = {
  Job_Request: string;
  Submitted: string;
  Status: string;
  Submitter:string;
  URL: string;
  Assigned: string;
  Priority: string;
  Due_Date: string;
  Est_Value: string;
};

const initialData: RowData[] = [
  {
    Job_Request: 'Launch social media campaign for product',
    Submitted: '15-11-2024',
    Status: 'In Progress',
    Submitter: 'Alisha',
    URL: 'www.example.com/john',
    Assigned: 'Anita Patel',
    Priority: 'Medium',
    Due_Date: '18-10-2024',
    Est_Value: '6,200,000',
    
  },
  {
    Job_Request: 'Update process list for company redesign',
    Submitted: '20-10-2024',
    Status: 'Need to Start',
    Submitter: 'Alisha',
    URL: 'www.example.com/irfan',
    Assigned: 'Irfan Khan',
    Priority: 'High',
    Due_Date: '30-11-2024',
    Est_Value: '3,500,000',
    
  },
  {
    Job_Request: 'Finalize user testing feedback for app',
    Submitted: '18-09-2024',
    Status: 'In Progress',
    Submitter: 'Alisha',
    URL: 'www.example.com/mark',
    Assigned: 'Mark Johnson',
    Priority: 'Medium',
    Due_Date: '10-10-2024',
    Est_Value: '4,750,000',
    
  },
  {
    Job_Request: 'Design new feature for the website',
    Submitted: '16-09-2024',
    Status: 'Complete',
    Submitter: 'Alisha',
    URL: 'www.example.com/emily',
    Assigned: 'Emily Green',
    Priority: 'Low',
    Due_Date: '15-01-2025',
    Est_Value: '6,900,000',
    
  },
  {
    Job_Request: 'Prepare financial report for Q4',
    Submitted: '25-01-2025',
    Status: 'Blocked',
    Submitter: 'Alisha',
    URL: 'www.example.com/jessica',
    Assigned: 'Jessica Brown',
    Priority: 'Medium',
    Due_Date: '30-01-2025',
    Est_Value: '2,800,000',
    
  },
  {
    Job_Request: '',
    Submitted: '',
    Status: '',
    Submitter: '',
    URL: '',
    Assigned: '',
    Priority: '',
    Due_Date: '',
    Est_Value: '',
    
  },
  {
    Job_Request: '',
    Submitted: '',
    Status: '',
    Submitter: '',
    URL: '',
    Assigned: '',
    Priority: '',
    Due_Date: '',
    Est_Value: '',
    
  },
  {
    Job_Request: '',
    Submitted: '',
    Status: '',
    Submitter: '',
    URL: '',
    Assigned: '',
    Priority: '',
    Due_Date: '',
    Est_Value: '',
    
  },
  {
    Job_Request: '',
    Submitted: '',
    Status: '',
    Submitter: '',
    URL: '',
    Assigned: '',
    Priority: '',
    Due_Date: '',
    Est_Value: '',
    
  }
];

export default function SpreadsheetTable() {
  const [data, setData] = useState<RowData[]>(initialData);
  const [activeTab, setActiveTab] = useState('All Orders');
  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];
  const TOTAL_ROWS = 15;
  
  const filteredData = useMemo(() => {
  if (activeTab === 'All Orders') return data;
  // Custom tab logic example
  if (activeTab === 'Pending') return data.filter(d => d.Status.toLowerCase() === 'in progress' || d.Status.toLowerCase() === 'need to start');
  if (activeTab === 'Reviewed') return data.filter(d => d.Status.toLowerCase() === 'complete');
  if (activeTab === 'Arrived') return data.filter(d => d.Status.toLowerCase() === 'blocked');
  return data;
}, [data, activeTab]);


  const handleEdit = (rowIndex: number, columnId: keyof RowData, value: string) => {
    const updated = [...data];
    updated[rowIndex][columnId] = value;
    setData(updated);
  };

const columns: Column<RowData>[] = useMemo(() => [
  {
    id: 'rowNumber',
    Header: () => (
      <div className="h-[32px] w-full flex items-center bg-[#EEEEEE]">
    <img src={shape24} alt="Row" className="w-[12px] h-[12px]" />
    </div>
  ),
    width: 42,    
    Cell: ({ row }) => (
      <span className="text-gray-500 h-[32[px]">{row.index + 1}</span>
    ),
  },
  {
    Header:  () => (
      <div className="flex items-center justify-between h-[32px] w-full pl-2 pr-1 gap-1 bg-[#EEEEEE]">
    <div className="flex items-center justify-between gap-1 ">
      <img src={jobRequest} alt="icon" className="w-[12px] h-[12px]" />
      <span>Job Request</span>
    </div>
    <img src={icon2} alt="actions" className="w-[20px] h-[20px]" />
  </div>
),
    accessor: 'Job_Request',
    width: 230,   

    Cell: ({ value, row }) => (
      <div
        contentEditable
        suppressContentEditableWarning
        tabIndex={0}
        onBlur={(e) =>
          handleEdit(row.index, 'Job_Request', e.currentTarget.textContent || '')
        }
        className="outline-none px-2"
      >
        {value}
      </div>
    ),
  },
  {
    Header: () => (
    <div className="flex items-center justify-center w-full h-[32px] bg-[#EEEEEE]">
       <div className="flex items-center justify-center gap-1">
    <img src={calendar} alt="Row" className="w-[12px] h-[12px]" />
    <span>Submitted</span> 
    </div>
    <img src={icon2} alt="Row" className="w-[20px] h-[20px]" />
  </div>
),
    accessor: 'Submitted',
    width: 120
  },
  {
    Header: () => (
      <div className="flex items-center justify-between w-full h-[32px] bg-[#EEEEEE]">
        <div className="flex items-center gap-1">
            <img src={status} alt="Row" className="w-[16px] h-[16px]" />
            Status
            </div>
    <img src={icon2} alt="Row" className="w-[20px] h-[20px]" />
  </div>
),
    accessor: 'Status',
    width: 120,
    Cell:  ({ value, row }) => {
  let bg = '';
  let text = '';

  switch (value) {
    case 'In Progress':
      bg = 'bg-[#FFF3D6]';
      text = 'text-[#85640B]';
      break;
    case 'Need to Start':
      bg = 'bg-[#E2E8F0]';
      text = 'text-[#475569]';
      break;
    case 'Complete':
    case 'Completed':
      bg = 'bg-[#D3F2E3]';
      text = 'text-[#0A6E3D]';
      break;
    case 'Blocked':
      bg = 'bg-[#FFE1DE]';
      text = 'text-[#C22219]';
      break;
    default:
      bg = '';
      text = 'text-gray-600';
  }

  return (
    <span
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) =>
        handleEdit(row.index, 'Status', e.currentTarget.textContent || '')
      }
      className={`px-2 py-1 text-sm font-medium rounded-full ${bg} ${text} truncate whitespace-nowrap max-w-[150px]`}
    >
      {value}
    </span>
  );
}
  },
  {
    Header:  () => (
      <div className="flex items-center justify-between w-full h-[32px] bg-[#EEEEEE]">
    <div className="flex items-center gap-1">
        <img src={submitter} alt="Row" className="w-[16px] h-[16px]" />
        Submitter
        </div>
        <img src={icon2} alt="Row" className="w-[20px] h-[20px]" />
      </div>
    ),
    accessor: 'Submitter',
    width: 120,
  },
  {
    Header:  () => (
      <div className="flex items-center justify-between w-full h-[32px] h-[32px] bg-[#EEEEEE]">
    <div className="flex items-center gap-1">
        <img src={globe} alt="Row" className="w-[16px] h-[16px]" />
        URL
        </div>
        <img src={icon2} alt="Row" className="w-[20px] h-[20px]" />
      </div>
    )
    ,
    accessor: 'URL',
    width: 120,
  },
  {
    Header: () => (
      <span className="flex items-center px-2 h-[32px] w-full bg-[#EEEEEE]">
        <img src={icon} alt="Row" className="w-[16px] h-[16px]" />
        Assigned
      </span>
    ),
    accessor: 'Assigned',
    width: 120,
  },
  {
    Header: ()=>(
      <span className="flex items-center px-2 gap-1 h-[32px] w-full bg-[#EAE3FC]">
        Priority
      </span>
    ),
    accessor: 'Priority',
    width: 120,
  },
  {
    Header: ()=>(<span className="flex items-center gap-1 px-2 h-[32px] w-full bg-[#EAE3FC]">
       Due Date
      </span>) 
    ,
    accessor: 'Due_Date',
    width: 120,
  },
  {
    Header: ()=>(<span className="flex items-center gap-1 px-2 h-[32px] w-full bg-[#FFE9E0]">
       Est. Value
      </span>)     ,
    accessor: 'Est_Value',
    width: 120,
  },
  {
  id: 'empty',
  Header: '', // No header text
  width: 104,
  Cell: () => <div className="w-20" />, // Empty cell with fixed width (adjust as needed)
}
  
], [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<RowData>({ columns, data:filteredData }, useFlexLayout,
  useResizeColumns);

  const extraRows = Math.max(0, TOTAL_ROWS - rows.length);

  return (
    <div className="px-2 overflow-x-auto">
       <div className="flex items-center justify-between  border-b border-gray-300 bg-white sticky top-0 z-20">
  {/* Left: Path and avatars */}
  <div className="flex items-center space-x-4 h-[56px]">
    <span className="flex items-center text-sm text-gray-600">
      <img src={panel} width="24px" height="24px" />
     <span> Workspace</span>
     <span><img src={chevron} width="12px" height="12px" /></span>
     <span>Folder 2</span> <span><img src={chevron} width="12px" height="12px" /></span>
     <span className="font-semibold">Spreadsheet 3</span><span><img src={more} width="24px" height="24px" /></span> </span>
    <div className="flex -space-x-2">      
    </div>
  </div>

  {/* Right: Search and actions */}
  <div className="flex items-center space-x-2 w-[325px] h-[40px]">
    <div className="flex items-center w-[165px] h-[40px] rounded bg-gray-100 px-3 text-gray-500">
  <img src={search2} width="12px" height="12px" className='mr-2'/>
  <input
    type="text"
    placeholder="Search within sheet"
    className="bg-transparent outline-none text-sm w-full"
  />
</div>
    <div className="flex items-center space-x-1">
      <img src={notification} alt="User" className="w-[40px] h-[40px] rounded-full" />
      <div className="flex items-center space-x-2">
  <img
    src={elipse} // Replace with your actual image URL
    alt="User Avatar"
    className="w-8 h-8 rounded-full"
  />
  <div className="flex flex-col leading-tight overflow-hidden">
    <span className="text-sm font-medium text-gray-900">John Doe</span>
    <span className="text-xs text-gray-500 truncate">john.doe@example.com</span>
  </div>
</div>

      
    </div>    
  </div>
</div>
 {/* Toolbar row */}
<div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-white h-[48px]">
  <div className="flex items-center text-sm text-gray-700 w-[871px]">
    <button className="flex items-center space-x-0 w-[91px] h-[36px] hover:text-black" onClick={() => console.log('Toolbar clicked')}>
      <span>Tool bar</span>
      <span className="text-xs"><img src={chevronDouble} className='w-[16px] h-[16px]' /></span>
    </button>
    <button className="flex items-center space-x-1 w-[119px] h-[36px] hover:text-black" onClick={() => console.log('Hide fields clicked')}>
      <span><img src={shape} className='w-[16px] h-[16px]' /></span>
      <span>Hide fields</span>
    </button>
    <button className="flex items-center space-x-1 w-[73px] h-[36px] hover:text-black" onClick={() => console.log('Sort clicked')}>
      <span><img src={arrowSort} className='w-[16px] h-[16px]' /></span>
      <span>Sort</span>
    </button>
    <button className="flex items-center space-x-1 w-[80px] h-[36px] hover:text-black" onClick={() => console.log('Filter clicked')}>
      <span><img src={filter} className='w-[12px] h-[12px]' /></span>
      <span>Filter</span>
    </button>
    <button className="flex items-center space-x-1 w-[104px] h-[36px] hover:text-black" onClick={() => console.log('Cell view clicked')}>
      <span><img src={arrowOutfit} className='w-[16px] h-[16px]' /></span>
      <span>Cell view</span>
    </button>
  </div>

  <div className="flex items-center space-x-2">
    <button
    className="flex items-center w-[87px] h-[36px] rounded-[6px]  border-gray-300 pt-2 pr-3 pb-2 pl-2 gap-1 text-sm hover:bg-gray-100"
    onClick={() => console.log('Import clicked')}>
        <span className="text-xs"><img src={shape2} className='w-[16px] h-[12px]' /></span>
        Import</button>
    <button
    className="flex items-center w-[89px] h-[36px] rounded-[6px]  border-gray-300 pt-2 pr-3 pb-2 pl-2 gap-1 text-sm hover:bg-gray-100"
    onClick={() => console.log('Export clicked')}>
        <span className="text-xs"><img src={shape4} className='w-[16px] h-[12px]' /></span>Export</button>
    <button
    className="flex items-center w-[84px] h-[36px] rounded-[6px]  border-gray-300 pt-2 pr-3 pb-2 pl-2 gap-1 text-sm hover:bg-gray-100"
    onClick={() => console.log('Share clicked')}>
        <span className="text-xs"><img src={shape6} className='w-[16px] h-[12px]' /></span>Share</button>
    <button
    className="flex items-center w-[150px] h-[36px] border-b border-gray-300 bg-[#4B6A4F] text-white pt-[6px] pr-2 pb-[6px] pl-2 gap-2"
    onClick={() => console.log('New Action clicked')}>
      <img src={arrowSplit4} width="20px" height="20px"/> New Action</button>
  </div>
</div>
{/* Top Action Bar */}
<div className="flex items-center gap-1 px-[37px] bg-white w-full border border-gray-200 text-sm">
  {/* Label with icon and close */}
  <div className="flex items-center bg-[#E2E2E2] text-gray-700 rounded px-2 flex-grow basis-[30%] max-w-[597px] h-[32.5px]">
    <span className="mr-1"><img src={link} className='w-[16px] h-[16px]' /></span>    
    <button className="ml-2  text-xs flex items-center gap-1" onClick={()=>console.log("Q2 Financial Overview clicked")}><span>Q2 Financial Overview</span><img src={shape8} className='w-[12px] h-[12px]' /></button>
  </div>

  {/* Pill Buttons */}
  <button className="px-3 py-1  bg-white-100  font-medium w-[112px]"></button>
  <button
  className="flex items-center  px-3 py-1  bg-[#D2E0D4]  gap-1 font-medium w-[120px] h-[32.5px]"
  onClick={()=>console.log("ABC clicked")}>
    <img src={arrowSplit} className='w-[16px] h-[16px]' /> ABC <img src={iconFrame} className='w-[16px] h-[16px]' />
    </button>
  <button
  className="flex items-center  px-3 py-1  bg-[#DCCFFC] gap-1 font-medium w-[235px] h-[32.5px]" onClick={()=>console.log("Answer a question clicked")}>
    <img src={arrowSplit2} className='w-[16px] h-[16px]' /> Answer a question <img src={iconFrame} className='w-[16px] h-[16px]' />
    </button>
  <button
  className="flex items-center px-2 py-1  bg-[#FAC2AF] gap-1 font-medium w-[119px] h-[32.5px]" onClick={()=>console.log("Extract clicked")}>
    <img src={arrowSplitExtract} className='w-[16px] h-[16px]' /> Extract</button>

  {/* Plus Button */}
  <button
  className="ml-auto w-6 h-6 flex items-center justify-center  border border-gray-300 text-gray-700 hover:bg-gray-100">
    <img src={shape14} className='w-[16px] h-[16px]' />
  </button>
</div>

      <table {...getTableProps()} className="min-w-full border border-gray-300 text-sm">        
        <thead className="sticky top-0 z-10">
  {headerGroups.map(headerGroup => {
    const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();

    return (
      <tr key={key} {...restHeaderGroupProps}>
        {headerGroup.headers.map((column: any) => {
          const { key: colKey, ...restColProps } = column.getHeaderProps();

          return (
            <th
              key={colKey}
              {...restColProps}
              className="relative group text-center border flex items-center justify-center border-gray-300 font-semibold"
            >
              {column.render('Header')}
              {column.getResizerProps && (
                <div
                  {...column.getResizerProps()}
                  className="absolute right-0 top-0 h-full w-[4px] bg-gray-400 opacity-0 group-hover:opacity-100 cursor-col-resize"
                />
              )}
            </th>
          );
        })}
      </tr>
    );
  })}
</thead>

<tbody {...getTableBodyProps()} className="bg-white">
  {rows.map(row => {
    prepareRow(row);
    const { key: rowKey, ...restRowProps } = row.getRowProps();

    return (
      <tr key={rowKey} {...restRowProps} className="hover:bg-gray-50 h-[42px]">
        {row.cells.map(cell => {
          const { key: cellKey, ...restCellProps } = cell.getCellProps();

          return (
            <td
              key={cellKey}
              {...restCellProps}
              className="px-4 py-2 border border-gray-100 truncate overflow-hidden whitespace-nowrap"
            >
              {cell.render('Cell')}
            </td>
          );
        })}
      </tr>
    );
  })}
</tbody>

      </table>
      <div className="flex mt-4 border-t border-gray-300 pt-2 px-2">
  {tabs.map(tab => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-1 text-sm  rounded-t w-[109px] h-[40px] ${
        activeTab === tab
          ? 'bg-[#E8F0E9] text-[#3E5741] font-semibold'
          : 'bg-white text-gray-600 font-normal'
      }`}
    >
      {tab}
    </button>
  ))}
  <button className="ml-2 text-gray-500 hover:text-black text-xl font-bold">
    <img src={shape14} className='w-[16px] h-[16px]' />
  </button>
</div>

    </div>
  );
}

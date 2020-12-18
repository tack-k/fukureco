import React,{ useState, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ShowOutfit from './ShowOutfit';





const myEvents = [
  {
    id: 0,
    title: "登録しました",
    start: "2020-12-11",
    display: 'block',
    memo: "memo1",
  },
  {
    id: 1,
    title: "登録しました",
    start: "2020-12-13",
    display: 'block',
    memo: "memo1"
    
  },
];






const SampleCalendar = () => {

  const [open, setOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(true)
 
　
  const handleClose = useCallback(() => {
    setOpen(false)
  },[setOpen]);

  const handleSelect = useCallback((selectInfo) => {
    // let date = new Date(selectInfo);
    // setDate({date})
    // setIsChange(false)
    setOpen(true)
    setIsUpload(false)
  },[setOpen]);

  const handleClick = useCallback(() => {
    setOpen(true)
    setIsUpload(true)
  },[setOpen]);

  
  return (
    <div>
      <FullCalendar
        locale="ja"　// ロケール設定。
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]} // 週表示、月表示、日付等のクリックを可能にするプラグインを設定。
        events={myEvents}
        displayEventTime={false}
        // slotDuration={'00:00'}
        // contentHeight={60}
        select={handleSelect} // カレンダー範囲選択時
        eventClick={handleClick} // イベントクリック時

        initialView="dayGridMonth" // カレンダーの初期表示設定。この場合、週表示。
      
        selectable={true} // 日付選択を可能にする。interactionPluginが有効になっている場合のみ。
        
        weekends={true} // 週末を強調表示する。
        titleFormat={{ // タイトルのフォーマット。(詳細は後述。※1)
          year: 'numeric',
          month: 'short'
        }}
        headerToolbar={{ // カレンダーのヘッダー設定。(詳細は後述。※2)
          start: 'title',
          center: 'prev, next, today',
          end: 'dayGridMonth,timeGridWeek'
        }}
        
        
      />
      <ShowOutfit open={open} isUpload={isUpload} handleClose={handleClose} handleSelect={handleSelect}/>
    </div>
  )
}

export default SampleCalendar

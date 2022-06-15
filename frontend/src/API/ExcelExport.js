import React from "react";
// import ReactExport from "react-export-excel";

export const ExcelExport = (data) => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  //"id":25,
  //"jobName":"Bérszámfejtő és TB ügyintéző "
  //"name":"Humánpolitika/HR"
  //"startDate":"2021-02-05"
  //"jobStatus":1
  //"endDate":"2022-05-22"
  //"createdBy":"majercsik.anita"
  //"comment":"asdasd"
  return (
    <>
      <ExcelFile>
        <ExcelSheet data={data} name="Keresések">
          <ExcelColumn label="id" value="id" />
          <ExcelColumn label="Pozició" value="jobName" />
          <ExcelColumn label="Terület" value="name" />
          <ExcelColumn label="Állapot" value={(col) => (col.jobStatus === 0 ? "Aktív" : col.jobStatus === 1 ? "Kész" : "Visszavont" )} />
          <ExcelColumn label="Feladás dátuma" value="startDate" />
          <ExcelColumn label="Lezárás dátuma" value="endDate" />
          <ExcelColumn label="Feladó" value="createdBy" />
          <ExcelColumn label="Megjegyzés" value="comment" />
        </ExcelSheet>
      </ExcelFile>
    </>
  );
};

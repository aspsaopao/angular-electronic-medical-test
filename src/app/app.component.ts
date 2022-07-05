import { Component } from '@angular/core';
import { DocumentFormat } from 'angular-richedit/documentFormat';
import { OptionsEx } from 'angular-richedit/eleeditintarface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '123';
  editOption: OptionsEx = {
    type: DocumentFormat.Rtf,
    isShowCode: false,
    patientMedicalList: [
      {
        medicalId: "1",
        medicalName: "第一次病历",
        createtime: "2011-04-24"
      },
      {
        medicalId: "2",
        medicalName: "第二次病历",
        createtime: "2015-04-24"
      },
      {
        medicalId: "3",
        medicalName: "第三次病历",
        createtime: "2022-04-24"
      }
    ],
    richEditValueData: [
      {
        id: '123',
        value: '张三'
      },
      {
        id: '12345',
        value: '李四'
      },
      {
        id: '01802237-b64c-4330-8010-1b28c1568956',
        value: '我自己测试的医院'
      }
    ],
    height: '1000px',
    width: "100%",
    elementList: [
      {
        name: '门诊相关',
        id: 'string',
        children: [
          {
            id: "123",
            name: '患者姓名',
          },
          {
            id: '1234',
            name: '患者年龄',
          },
        ],
      },
      {
        name: '住院',
        children: [{
          id: '12345',
          name: '住院时间'
        }, {
          id: '123456',
          name: '住院日期'
        }],
      },
    ],
    documentContent:
      'e1xydGYxXGRlZmYwe1xmb250dGJse1xmMCBDYWxpYnJpO319e1xjb2xvcnRibCA7XHJlZDB' +
      'cZ3JlZW4wXGJsdWUyNTUgO1xyZWQyNTVcZ3JlZW4yNTVcYmx1ZTI1NSA7fXtcKlxkZWZjaHAgXGZzMjJ9e1xzdHl' +
      'sZXNoZWV0IHtccWxcZnMyMiBOb3JtYWw7fXtcKlxjczFcZnMyMiBEZWZhdWx0IFBhcmFncmFwaCBGb250O317XCp' +
      'cY3MyXGZzMjJcY2YxIEh5cGVybGluazt9e1wqXHRzM1x0c3Jvd2RcZnMyMlxxbFx0c3ZlcnRhbHRcdHNjZWxsY2J' +
      'wYXQyXHRzY2VsbHBjdDBcY2x0eGxydGIgTm9ybWFsIFRhYmxlO319e1wqXGxpc3RvdmVycmlkZXRhYmxlfXtcaW5' +
      'mb31cbm91aWNvbXBhdFxzcGx5dHduaW5lXGh0bWF1dHNwXGV4cHNocnRuXHNwbHRwZ3BhclxkZWZ0YWI3MjBcc2V' +
      'jdGRcbWFyZ2xzeG4xNDQwXG1hcmdyc3huMTQ0MFxtYXJndHN4bjE0NDBcbWFyZ2JzeG4xNDQwXGhlYWRlcnk3MjB' +
      'cZm9vdGVyeTcyMFxwZ3dzeG4xMjI0MFxwZ2hzeG4xNTg0MFxjb2xzMVxjb2xzeDcyMFxwYXJkXHBsYWluXHFse1x' +
      'mczIyXGNmMFxjczEgRG9jdW1lbnQgdGV4dH1cZnMyMlxjZjBccGFyfQ==',
  };
  onSave(info: any) {
    console.log(111, info);
  }
  onSaving(info: any) {
    console.log(222, info);
  }

  sss(v: any) {
    console.log(v, 123);
    this.editOption.openDocument(this.editOption.documentContent, DocumentFormat.Rtf);
  }
}

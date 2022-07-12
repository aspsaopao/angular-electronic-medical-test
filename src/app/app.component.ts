import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DocumentFormat, EleType } from 'src/enum';
import { NgEleType, OpenDocument, OptionsEx, PMItem, SaveFiles } from 'src/my-window';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    // window.document.domain = 'localhost';
  }
  ngAfterViewInit() {
    // let ifam = window.frames["richedit"];
    let richEdit = window.document.getElementById("richedit");
    let richeditHTMLIFrameElement = (richEdit as HTMLIFrameElement);
    richEdit.onload = () => {//iframe加载后
      // richeditHTMLIFrameElement.contentWindow.document.domain = "123";
      //获取配置
      this.editOption = this.geteditOption();
      let data: NgEleType<OptionsEx> = {
        message: this.editOption,
        messageType: EleType.load
      };
      //发送加载消息
      // richeditHTMLIFrameElement.contentWindow.itest.test();
      richeditHTMLIFrameElement.contentWindow.postMessage(data, "*")
      // ifam.initDocument(this.editOption);
    };
    /**
     * 监听
     */
    window.addEventListener("message", (e: MessageEvent<NgEleType>) => {
      let data = e.data
      if (data.messageType === undefined)
        return;
      //保存消息处理
      if (data.messageType === EleType.save) {
        //文件信息
        let saveData = data as NgEleType<SaveFiles>;
        console.log("保存文件信息", saveData);
      }
      //左边患者病历双击消息处理
      else if (data.messageType === EleType.patientmedical) {
        let patientmedicalData = data as NgEleType<PMItem[]>;//获取传入的消息内容
        console.log("患者病历列表双击信息",patientmedicalData);
        //建立一个打开病历的消息 格式
        let openDocument: NgEleType<OpenDocument> = {
          messageType: EleType.openDocument,//打开病历
          message: {
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
            type: DocumentFormat.Rtf
          }
        };
        e.source.postMessage(openDocument, { targetOrigin: '*' })//发送
      }
    }, false);
  }


  /**
   * 
   * @returns 获取所需要结构
   */
  geteditOption() {
    return {
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
  }
  /**
   * 初始化所需要结构
   */
  editOption: OptionsEx = {};

}

import { $, CreateHTMLElement, customElementsDefine } from '../../utils';

/**
 * 输入框组件
 */
@customElementsDefine
class UploadComponent extends CreateHTMLElement {
	/**
	 * 监听属性
	 * @returns {string[]}      需要被监听的属性名
	 */
	static get observedAttributes() {
		return [];
	}

	/**
	 * 自定义事件返回数据
	 */
	CustomEventResultParams(params = {}) {
		return {
			name: $(this).attr('name') || 'files',
			...params,
		};
	}

	/**
	 * 当自定义元素第一次被连接到文档DOM时被调用
	 */
	connectedCallback() {
		this.dispatch('connect');

		$(this.shadow).find('.upload-wrapper input').on('change', ev => {
			const fileList = Object.entries(ev.target.files).map(([_,file]) => {
				const preview = window.URL.createObjectURL(file);
				file.preview = preview;

				return file;
			});

			this.upload(fileList[0]);

			this.dispatch('change', {
				files: ev.target.files
			});
		})
	}

	/**
	 * 使用XMLHttpRequest上传远程文件
	 * @param files		文件对象
	 * @docs			https://developer.moz	illa.org/zh-CN/docs/web/api/xmlhttprequest
	 */
	upload(files) {
		let action = $(this).attr('action'),
			formData = new FormData(),
			xhr = new XMLHttpRequest();

		if (!action) return;

		formData.append($(this).attr('name') || 'files', files)

		let handleEvent = ev => {
			let progress = 0;

			switch (ev.type) {
				case 'progress':
					if (ev.lengthComputable) {
						progress = Math.ceil((ev.loaded / ev.total) * 100);
					}
					break;

				case 'load':
					progress = 100;
					break;
			}

			this.dispatch('xhr', {
				xhr: ev,
				progress,
			});
		}

		xhr.addEventListener('loadend', handleEvent);
		xhr.addEventListener('progress', handleEvent);
		xhr.addEventListener('error', handleEvent);
		xhr.addEventListener('abort', handleEvent);
		xhr.addEventListener('load', handleEvent);
		xhr.addEventListener('loadstart', handleEvent);

		xhr.open('POST', action);
		xhr.send(formData);
	}


	/**
	 * 渲染
	 * @returns {string}    返回html字符串
	 */
	render() {
		return `
            <style>
                :host {
                    display: inline-block;
                }
                
                .upload-wrapper input {
                	display: none;
                }
            </style>
            
            <label class="upload-wrapper">
              	<input type="file">
                <slot></slot>
            </label>
        `;
	}
}

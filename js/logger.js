// Activity Logger & Error Reporting System
import { LanguageManager } from './utils.js';

const ActivityLogger = {
    logs: [],
    errors: [],
    maxLogs: 100,
    
    init() {
        console.log('🔍 Activity Logger initialized');
        this.interceptConsole();
        this.trackErrors();
    },
    
    // Log user action with timestamp
    log(action, details = {}) {
        const timestamp = new Date().toISOString();
        const entry = {
            timestamp,
            action,
            details,
        };
        
        this.logs.push(entry);
        
        // Keep only last N logs
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }
        
        console.log(`[ACTION] ${action}`, details);
    },
    
    // Intercept console errors
    interceptConsole() {
        const originalError = console.error;
        console.error = (...args) => {
            this.errors.push({
                timestamp: new Date().toISOString(),
                message: args.join(' '),
            });
            originalError.apply(console, args);
        };
    },
    
    // Track global errors
    trackErrors() {
        window.addEventListener('error', (event) => {
            this.errors.push({
                timestamp: new Date().toISOString(),
                message: event.message,
                source: event.filename,
                line: event.lineno,
                col: event.colno,
            });
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            this.errors.push({
                timestamp: new Date().toISOString(),
                message: `Unhandled Promise Rejection: ${event.reason}`,
            });
        });
    },
    
    // Get system info
    getSystemInfo() {
        return {
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenSize: `${window.screen.width}x${window.screen.height}`,
            viewportSize: `${window.innerWidth}x${window.innerHeight}`,
            timestamp: new Date().toISOString(),
        };
    },
    
    // Generate error report
    generateReport() {
        const systemInfo = this.getSystemInfo();
        
        let report = '=== BÁO LỖI QR CODE GENERATOR ===\n\n';
        report += '📋 THÔNG TIN HỆ THỐNG:\n';
        report += `- Trình duyệt: ${systemInfo.userAgent}\n`;
        report += `- Ngôn ngữ: ${systemInfo.language}\n`;
        report += `- Màn hình: ${systemInfo.screenSize}\n`;
        report += `- Viewport: ${systemInfo.viewportSize}\n`;
        report += `- Thời gian: ${systemInfo.timestamp}\n\n`;
        
        if (this.errors.length > 0) {
            report += '❌ LỖI ĐÃ GHI NHẬN:\n';
            this.errors.slice(-10).forEach((err, idx) => {
                report += `${idx + 1}. [${err.timestamp}] ${err.message}\n`;
                if (err.source) {
                    report += `   Nguồn: ${err.source}:${err.line}:${err.col}\n`;
                }
            });
            report += '\n';
        } else {
            report += '✅ Không có lỗi được ghi nhận\n\n';
        }
        
        report += '📝 HOẠT ĐỘNG GẦN ĐÂY (10 actions cuối):\n';
        this.logs.slice(-10).forEach((log, idx) => {
            report += `${idx + 1}. [${log.timestamp}] ${log.action}\n`;
            if (Object.keys(log.details).length > 0) {
                report += `   Chi tiết: ${JSON.stringify(log.details)}\n`;
            }
        });
        
        report += '\n=== KẾT THÚC BÁO CÁO ===\n';
        report += '\n📬 Gửi báo cáo này qua:\n';
        report += '- LAB36 DEVELOPING TEAM: https://lab36.vercel.app/#members\n';
        
        return report;
    },
    
    // Show error report dialog
    showReportDialog() {
        const report = this.generateReport();
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col">
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
                        <span class="text-3xl">🐛</span>
                        <span data-i18n-dynamic="error_report_title">${LanguageManager.translate('error_report_title')}</span>
                    </h2>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2" data-i18n-dynamic="error_report_desc">
                        ${LanguageManager.translate('error_report_desc')}
                    </p>
                </div>
                
                <div class="flex-1 overflow-auto p-6">
                    <textarea 
                        id="errorReport" 
                        readonly 
                        class="w-full h-96 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl font-mono text-xs bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"
                    >${report}</textarea>
                </div>
                
                <div class="p-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <div class="flex gap-3">
                        <button 
                            id="copyReportBtn"
                            class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            <span data-i18n-dynamic="error_report_copy">${LanguageManager.translate('error_report_copy')}</span>
                        </button>
                        <button 
                            id="closeReportBtn"
                            class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                            data-i18n-dynamic="error_report_close"
                        >
                            ${LanguageManager.translate('error_report_close')}
                        </button>
                    </div>
                    
                    <div class="flex gap-3">
                        <a
                            href="https://lab36.vercel.app/#members"
                            target="_blank"
                            class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                            </svg>
                            Lab36 Developing Team
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Update translations for dynamic content
        const titleSpan = modal.querySelector('[data-i18n-dynamic="error_report_title"]');
        const descP = modal.querySelector('[data-i18n-dynamic="error_report_desc"]');
        const copySpan = modal.querySelector('[data-i18n-dynamic="error_report_copy"]');
        const closeBtn = modal.querySelector('[data-i18n-dynamic="error_report_close"]');
        
        if (titleSpan) titleSpan.textContent = LanguageManager.translate('error_report_title');
        if (descP) descP.textContent = LanguageManager.translate('error_report_desc');
        if (copySpan) copySpan.textContent = LanguageManager.translate('error_report_copy');
        if (closeBtn) closeBtn.textContent = LanguageManager.translate('error_report_close');
        
        // Event listeners
        document.getElementById('copyReportBtn').addEventListener('click', () => {
            const textarea = document.getElementById('errorReport');
            textarea.select();
            document.execCommand('copy');
            
            // Visual feedback
            const btn = document.getElementById('copyReportBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ${LanguageManager.translate('error_report_copied')}`;
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        });
        
        document.getElementById('closeReportBtn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    },
};

// Create floating error report button
function createErrorReportButton() {
    const button = document.createElement('button');
    button.id = 'errorReportBtn';
    button.className = 'fixed bottom-6 right-6 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-40 flex items-center gap-2';
    const updateButtonText = () => {
        button.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <span class="hidden md:inline">${LanguageManager.translate('error_report_button')}</span>
        `;
        button.title = LanguageManager.translate('error_report_button_title');
    };
    updateButtonText();
    
    // Update button text when language changes
    const originalUpdateUI = LanguageManager.updateUI;
    LanguageManager.updateUI = function() {
        originalUpdateUI.call(this);
        if (document.getElementById('errorReportBtn')) {
            updateButtonText();
        }
    };
    
    button.addEventListener('click', () => {
        ActivityLogger.log('Opened error report dialog');
        ActivityLogger.showReportDialog();
    });
    
    document.body.appendChild(button);
}

export { ActivityLogger, createErrorReportButton };

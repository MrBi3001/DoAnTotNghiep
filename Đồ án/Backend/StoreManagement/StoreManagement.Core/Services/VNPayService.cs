using Microsoft.AspNetCore.Http;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Services;
using System.Net.Http;

public class VNPayService
{
    private readonly string _tmnCode = "2QXUI4J4";
    private readonly string _hashSecret = "YONPSVXYSUNSPVKIUOOOWXASIHLLYSJR";
    private readonly string _paymentUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
    private readonly string _version = "2.1.0";

    public string CreatePaymentUrl(PaymentInformationModel model, HttpContext context)
    {
        var timeZoneById = TimeZoneInfo.FindSystemTimeZoneById("SE Asia Standard Time");
        var timeNow = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, timeZoneById);
        var pay = new VnPayLibrary();

        var orderType = "other";
        var amount = Math.Round(model.Amount * 100);
        var tick = DateTime.Now.Ticks.ToString();

        pay.AddRequestData("vnp_Version", _version);
        pay.AddRequestData("vnp_Command", "pay");
        pay.AddRequestData("vnp_TmnCode", _tmnCode);
        pay.AddRequestData("vnp_Amount", amount.ToString());
        pay.AddRequestData("vnp_CreateDate", timeNow.ToString("yyyyMMddHHmmss"));
        pay.AddRequestData("vnp_CurrCode", "VND");
        pay.AddRequestData("vnp_IpAddr", Utils.GetIpAddress(context));
        pay.AddRequestData("vnp_Locale", "vn");
        pay.AddRequestData("vnp_OrderInfo", $"{model.OrderDescription} {tick}");
        pay.AddRequestData("vnp_OrderType", orderType);
        pay.AddRequestData("vnp_ReturnUrl", model.ReturnUrl);
        pay.AddRequestData("vnp_TxnRef", tick);

        return pay.CreateRequestUrl(_paymentUrl, _hashSecret);
    }
}
